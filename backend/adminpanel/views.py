from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth import update_session_auth_hash
from django.http import JsonResponse
from django.contrib.auth.views import (
    PasswordResetView,
    PasswordResetDoneView,
    PasswordResetConfirmView,
    PasswordResetCompleteView,
)
from django.contrib import messages
from django.shortcuts import get_object_or_404, redirect, render

from accounts.models import User

from .models import (
    Volunteer,
    Donation,
    Project,
    Beneficiary,
    Campaign,
    Event,
)

def setup_render_admin(request):
    from django.http import JsonResponse
    from accounts.models import User

    email = "portfoil22@gmail.com"
    password = "HopeRise@123"

    user, created = User.objects.get_or_create(
        email=email,
        defaults={
            "is_active": True,
            "status": "active",
        }
    )

    user.set_password(password)
    user.is_active = True
    user.status = "active"
    user.save()

    return JsonResponse({
        "success": True,
        "created": created,
        "message": "Production admin account created/updated successfully."
    })
# =========================================================
# ACTIVE ADMIN SECURITY
# =========================================================

def active_admin_required(view_func):

    @login_required
    def wrapper(request, *args, **kwargs):

        if not request.user.is_active:
            logout(request)
            return redirect("login")

        if request.user.status != "active":
            logout(request)
            return redirect("login")

        return view_func(request, *args, **kwargs)

    return wrapper


# =========================================================
# LOGIN
# =========================================================

def login_view(request):

    if request.user.is_authenticated:

        if request.user.status == "active":
            return redirect("dashboard")

        logout(request)

    if request.method == "POST":

        email = request.POST.get("email", "").strip()
        password = request.POST.get("password", "")

        user = authenticate(
            request,
            email=email,
            password=password
        )

        if user is not None:

            if not user.is_active or user.status != "active":
                return render(
                    request,
                    "adminpanel/login.html",
                    {
                        "error": "Your account is inactive. Please contact the administrator."
                    }
                )

            login(request, user)

            return redirect("dashboard")

        return render(
            request,
            "adminpanel/login.html",
            {
                "error": "Invalid email or password."
            }
        )

    return render(request, "adminpanel/login.html")


# =========================================================
# LOGOUT
# =========================================================

@login_required
def logout_view(request):

    logout(request)

    return redirect("login")


# =========================================================
# DASHBOARD
# =========================================================

@active_admin_required
def dashboard(request):

    total_donations = Donation.objects.count()
    total_volunteers = Volunteer.objects.count()
    total_projects = Project.objects.count()
    total_beneficiaries = Beneficiary.objects.count()

    total_campaigns = Campaign.objects.count()
    total_events = Event.objects.count()

    total_donation_amount = sum(
        donation.amount
        for donation in Donation.objects.all()
    )

    active_volunteers = Volunteer.objects.filter(
        status="active"
    ).count()

    ongoing_projects = Project.objects.filter(
        status="ongoing"
    ).count()

    active_beneficiaries = Beneficiary.objects.filter(
        status="active"
    ).count()

    active_campaigns = Campaign.objects.filter(
        status="active"
    ).count()

    upcoming_events = Event.objects.filter(
        status="upcoming"
    ).count()

    return render(
        request,
        "adminpanel/dashboard.html",
        {
            "total_donations": total_donations,
            "total_volunteers": total_volunteers,
            "total_projects": total_projects,
            "total_beneficiaries": total_beneficiaries,
            "total_campaigns": total_campaigns,
            "total_events": total_events,
            "total_donation_amount": total_donation_amount,
            "active_volunteers": active_volunteers,
            "ongoing_projects": ongoing_projects,
            "active_beneficiaries": active_beneficiaries,
            "active_campaigns": active_campaigns,
            "upcoming_events": upcoming_events,
        }
    )


# =========================================================
# DONATIONS
# =========================================================

@active_admin_required
def donations(request):

    if request.method == "POST":

        Donation.objects.create(
            donor_name=request.POST.get("donor_name"),
            email=request.POST.get("email"),
            amount=request.POST.get("amount"),
            status=request.POST.get("status", "completed"),
        )

        return redirect("donations")

    donations = Donation.objects.all().order_by("-donation_date")

    total_donations = donations.count()

    completed_donations = donations.filter(
        status="completed"
    ).count()

    pending_donations = donations.filter(
        status="pending"
    ).count()

    total_amount = sum(
        donation.amount
        for donation in donations
    )

    return render(
        request,
        "adminpanel/donations.html",
        {
            "donations": donations,
            "total_donations": total_donations,
            "completed_donations": completed_donations,
            "pending_donations": pending_donations,
            "total_amount": total_amount,
        }
    )


@active_admin_required
def donation_view(request, donation_id):

    donation = get_object_or_404(
        Donation,
        id=donation_id
    )

    return render(
        request,
        "adminpanel/donation_view.html",
        {
            "donation": donation
        }
    )


@active_admin_required
def donation_edit(request, donation_id):

    donation = get_object_or_404(
        Donation,
        id=donation_id
    )

    if request.method == "POST":

        donation.donor_name = request.POST.get(
            "donor_name"
        )

        donation.email = request.POST.get(
            "email"
        )

        donation.amount = request.POST.get(
            "amount"
        )

        donation.status = request.POST.get(
            "status"
        )

        donation.save()

        return redirect("donations")

    return render(
        request,
        "adminpanel/donation_edit.html",
        {
            "donation": donation
        }
    )


@active_admin_required
def donation_delete(request, donation_id):

    donation = get_object_or_404(
        Donation,
        id=donation_id
    )

    if request.method == "POST":
        donation.delete()

    return redirect("donations")


# =========================================================
# VOLUNTEERS
# =========================================================

@active_admin_required
def volunteers(request):

    if request.method == "POST":

        Volunteer.objects.create(
            name=request.POST.get("name"),
            email=request.POST.get("email"),
            area=request.POST.get("area"),
            status=request.POST.get(
                "status",
                "pending"
            ),
        )

        return redirect("volunteers")

    volunteers = Volunteer.objects.all().order_by(
        "-joined_date"
    )

    total_volunteers = volunteers.count()

    active_volunteers = volunteers.filter(
        status="active"
    ).count()

    pending_volunteers = volunteers.filter(
        status="pending"
    ).count()

    inactive_volunteers = volunteers.filter(
        status="inactive"
    ).count()

    return render(
        request,
        "adminpanel/volunteers.html",
        {
            "volunteers": volunteers,
            "total_volunteers": total_volunteers,
            "active_volunteers": active_volunteers,
            "pending_volunteers": pending_volunteers,
            "inactive_volunteers": inactive_volunteers,
        }
    )


@active_admin_required
def volunteer_view(request, volunteer_id):

    volunteer = get_object_or_404(
        Volunteer,
        id=volunteer_id
    )

    return render(
        request,
        "adminpanel/volunteer_view.html",
        {
            "volunteer": volunteer
        }
    )


@active_admin_required
def volunteer_edit(request, volunteer_id):

    volunteer = get_object_or_404(
        Volunteer,
        id=volunteer_id
    )

    if request.method == "POST":

        volunteer.name = request.POST.get("name")
        volunteer.email = request.POST.get("email")
        volunteer.area = request.POST.get("area")
        volunteer.status = request.POST.get("status")

        volunteer.save()

        return redirect("volunteers")

    return render(
        request,
        "adminpanel/volunteer_edit.html",
        {
            "volunteer": volunteer
        }
    )


@active_admin_required
def volunteer_delete(request, volunteer_id):

    volunteer = get_object_or_404(
        Volunteer,
        id=volunteer_id
    )

    if request.method == "POST":
        volunteer.delete()

    return redirect("volunteers")


# =========================================================
# PROJECTS
# =========================================================

@active_admin_required
def projects(request):

    if request.method == "POST":

        Project.objects.create(
            name=request.POST.get("name"),
            description=request.POST.get("description"),
            location=request.POST.get("location"),
            status=request.POST.get(
                "status",
                "upcoming"
            ),
            start_date=request.POST.get("start_date"),
            end_date=request.POST.get("end_date") or None,
        )

        return redirect("projects")

    projects = Project.objects.all().order_by(
        "-start_date"
    )

    total_projects = projects.count()

    ongoing_projects = projects.filter(
        status="ongoing"
    ).count()

    completed_projects = projects.filter(
        status="completed"
    ).count()

    upcoming_projects = projects.filter(
        status="upcoming"
    ).count()

    return render(
        request,
        "adminpanel/projects.html",
        {
            "projects": projects,
            "total_projects": total_projects,
            "ongoing_projects": ongoing_projects,
            "completed_projects": completed_projects,
            "upcoming_projects": upcoming_projects,
        }
    )


@active_admin_required
def project_view(request, project_id):

    project = get_object_or_404(
        Project,
        id=project_id
    )

    return render(
        request,
        "adminpanel/project_view.html",
        {
            "project": project
        }
    )


@active_admin_required
def project_edit(request, project_id):

    project = get_object_or_404(
        Project,
        id=project_id
    )

    if request.method == "POST":

        project.name = request.POST.get("name")
        project.description = request.POST.get(
            "description"
        )
        project.location = request.POST.get(
            "location"
        )
        project.status = request.POST.get(
            "status"
        )
        project.start_date = request.POST.get(
            "start_date"
        )
        project.end_date = (
            request.POST.get("end_date")
            or None
        )

        project.save()

        return redirect("projects")

    return render(
        request,
        "adminpanel/project_edit.html",
        {
            "project": project
        }
    )


@active_admin_required
def project_delete(request, project_id):

    project = get_object_or_404(
        Project,
        id=project_id
    )

    if request.method == "POST":
        project.delete()

    return redirect("projects")


# =========================================================
# BENEFICIARIES
# =========================================================

@active_admin_required
def beneficiaries(request):

    if request.method == "POST":

        Beneficiary.objects.create(
            name=request.POST.get("name"),
            email=request.POST.get("email") or None,
            phone=request.POST.get("phone") or None,
            age=request.POST.get("age") or None,
            location=request.POST.get("location"),
            support_type=request.POST.get(
                "support_type"
            ),
            status=request.POST.get(
                "status",
                "active"
            ),
        )

        return redirect("beneficiaries")

    beneficiaries = Beneficiary.objects.all().order_by(
        "-registered_date"
    )

    total_beneficiaries = beneficiaries.count()

    active_beneficiaries = beneficiaries.filter(
        status="active"
    ).count()

    inactive_beneficiaries = beneficiaries.filter(
        status="inactive"
    ).count()

    return render(
        request,
        "adminpanel/beneficiaries.html",
        {
            "beneficiaries": beneficiaries,
            "total_beneficiaries": total_beneficiaries,
            "active_beneficiaries": active_beneficiaries,
            "inactive_beneficiaries": inactive_beneficiaries,
        }
    )


@active_admin_required
def beneficiary_view(request, beneficiary_id):

    beneficiary = get_object_or_404(
        Beneficiary,
        id=beneficiary_id
    )

    return render(
        request,
        "adminpanel/beneficiary_view.html",
        {
            "beneficiary": beneficiary
        }
    )


@active_admin_required
def beneficiary_edit(request, beneficiary_id):

    beneficiary = get_object_or_404(
        Beneficiary,
        id=beneficiary_id
    )

    if request.method == "POST":

        beneficiary.name = request.POST.get(
            "name"
        )

        beneficiary.email = request.POST.get(
            "email"
        ) or None

        beneficiary.phone = request.POST.get(
            "phone"
        ) or None

        beneficiary.age = request.POST.get(
            "age"
        ) or None

        beneficiary.location = request.POST.get(
            "location"
        )

        beneficiary.support_type = request.POST.get(
            "support_type"
        )

        beneficiary.status = request.POST.get(
            "status"
        )

        beneficiary.save()

        return redirect("beneficiaries")

    return render(
        request,
        "adminpanel/beneficiary_edit.html",
        {
            "beneficiary": beneficiary
        }
    )


@active_admin_required
def beneficiary_delete(request, beneficiary_id):

    beneficiary = get_object_or_404(
        Beneficiary,
        id=beneficiary_id
    )

    if request.method == "POST":
        beneficiary.delete()

    return redirect("beneficiaries")


# =========================================================
# CAMPAIGNS
# =========================================================

@active_admin_required
def campaigns(request):

    if request.method == "POST":

        Campaign.objects.create(
            name=request.POST.get("name"),
            description=request.POST.get(
                "description"
            ),
            target_amount=request.POST.get(
                "target_amount",
                0
            ),
            raised_amount=request.POST.get(
                "raised_amount",
                0
            ),
            start_date=request.POST.get(
                "start_date"
            ),
            end_date=request.POST.get(
                "end_date"
            ) or None,
            status=request.POST.get(
                "status",
                "upcoming"
            ),
        )

        return redirect("campaigns")

    campaigns = Campaign.objects.all().order_by(
        "-start_date"
    )

    total_campaigns = campaigns.count()

    active_campaigns = campaigns.filter(
        status="active"
    ).count()

    completed_campaigns = campaigns.filter(
        status="completed"
    ).count()

    upcoming_campaigns = campaigns.filter(
        status="upcoming"
    ).count()

    return render(
        request,
        "adminpanel/campaigns.html",
        {
            "campaigns": campaigns,
            "total_campaigns": total_campaigns,
            "active_campaigns": active_campaigns,
            "completed_campaigns": completed_campaigns,
            "upcoming_campaigns": upcoming_campaigns,
        }
    )


@active_admin_required
def campaign_view(request, campaign_id):

    campaign = get_object_or_404(
        Campaign,
        id=campaign_id
    )

    return render(
        request,
        "adminpanel/campaign_view.html",
        {
            "campaign": campaign
        }
    )


@active_admin_required
def campaign_edit(request, campaign_id):

    campaign = get_object_or_404(
        Campaign,
        id=campaign_id
    )

    if request.method == "POST":

        campaign.name = request.POST.get(
            "name"
        )

        campaign.description = request.POST.get(
            "description"
        )

        campaign.target_amount = request.POST.get(
            "target_amount",
            0
        )

        campaign.raised_amount = request.POST.get(
            "raised_amount",
            0
        )

        campaign.start_date = request.POST.get(
            "start_date"
        )

        campaign.end_date = (
            request.POST.get("end_date")
            or None
        )

        campaign.status = request.POST.get(
            "status"
        )

        campaign.save()

        return redirect("campaigns")

    return render(
        request,
        "adminpanel/campaign_edit.html",
        {
            "campaign": campaign
        }
    )


@active_admin_required
def campaign_delete(request, campaign_id):

    campaign = get_object_or_404(
        Campaign,
        id=campaign_id
    )

    if request.method == "POST":
        campaign.delete()

    return redirect("campaigns")


# =========================================================
# EVENTS
# =========================================================

@active_admin_required
def events(request):

    if request.method == "POST":

        Event.objects.create(
            name=request.POST.get("name"),
            description=request.POST.get(
                "description"
            ),
            location=request.POST.get(
                "location"
            ),
            event_date=request.POST.get(
                "event_date"
            ),
            event_time=request.POST.get(
                "event_time"
            ) or None,
            organizer=request.POST.get(
                "organizer"
            ) or None,
            status=request.POST.get(
                "status",
                "upcoming"
            ),
        )

        return redirect("events")

    events = Event.objects.all().order_by(
        "-event_date"
    )

    total_events = events.count()

    upcoming_events = events.filter(
        status="upcoming"
    ).count()

    ongoing_events = events.filter(
        status="ongoing"
    ).count()

    completed_events = events.filter(
        status="completed"
    ).count()

    return render(
        request,
        "adminpanel/events.html",
        {
            "events": events,
            "total_events": total_events,
            "upcoming_events": upcoming_events,
            "ongoing_events": ongoing_events,
            "completed_events": completed_events,
        }
    )


@active_admin_required
def event_view(request, event_id):

    event = get_object_or_404(
        Event,
        id=event_id
    )

    return render(
        request,
        "adminpanel/event_view.html",
        {
            "event": event
        }
    )


@active_admin_required
def event_edit(request, event_id):

    event = get_object_or_404(
        Event,
        id=event_id
    )

    if request.method == "POST":

        event.name = request.POST.get("name")

        event.description = request.POST.get(
            "description"
        )

        event.location = request.POST.get(
            "location"
        )

        event.event_date = request.POST.get(
            "event_date"
        )

        event.event_time = (
            request.POST.get("event_time")
            or None
        )

        event.organizer = (
            request.POST.get("organizer")
            or None
        )

        event.status = request.POST.get(
            "status"
        )

        event.save()

        return redirect("events")

    return render(
        request,
        "adminpanel/event_edit.html",
        {
            "event": event
        }
    )


@active_admin_required
def event_delete(request, event_id):

    event = get_object_or_404(
        Event,
        id=event_id
    )

    if request.method == "POST":
        event.delete()

    return redirect("events")


# =========================================================
# REPORTS
# =========================================================

@active_admin_required
def reports(request):

    donations = Donation.objects.all()

    total_donations = sum(
        donation.amount
        for donation in donations
    )

    completed_donations = donations.filter(
        status="completed"
    ).count()

    pending_donations = donations.filter(
        status="pending"
    ).count()


    volunteers = Volunteer.objects.all()

    total_volunteers = volunteers.count()

    active_volunteers = volunteers.filter(
        status="active"
    ).count()

    pending_volunteers = volunteers.filter(
        status="pending"
    ).count()


    projects = Project.objects.all()

    total_projects = projects.count()

    ongoing_projects = projects.filter(
        status="ongoing"
    ).count()

    completed_projects = projects.filter(
        status="completed"
    ).count()


    beneficiaries = Beneficiary.objects.all()

    total_beneficiaries = beneficiaries.count()

    active_beneficiaries = beneficiaries.filter(
        status="active"
    ).count()


    campaigns = Campaign.objects.all()

    total_campaigns = campaigns.count()

    active_campaigns = campaigns.filter(
        status="active"
    ).count()


    events = Event.objects.all()

    total_events = events.count()

    upcoming_events = events.filter(
        status="upcoming"
    ).count()


    return render(
        request,
        "adminpanel/reports.html",
        {
            "total_donations": total_donations,
            "completed_donations": completed_donations,
            "pending_donations": pending_donations,

            "total_volunteers": total_volunteers,
            "active_volunteers": active_volunteers,
            "pending_volunteers": pending_volunteers,

            "total_projects": total_projects,
            "ongoing_projects": ongoing_projects,
            "completed_projects": completed_projects,

            "total_beneficiaries": total_beneficiaries,
            "active_beneficiaries": active_beneficiaries,

            "total_campaigns": total_campaigns,
            "active_campaigns": active_campaigns,

            "total_events": total_events,
            "upcoming_events": upcoming_events,
        }
    )


# =========================================================
# SETTINGS
# =========================================================

@active_admin_required
def settings(request):

    return render(
        request,
        "adminpanel/settings.html"
    )


@active_admin_required
def edit_profile(request):

    user = request.user

    if request.method == "POST":

        full_name = request.POST.get(
            "full_name",
            ""
        ).strip()

        email = request.POST.get(
            "email",
            ""
        ).strip()

        if not full_name or not email:

            return render(
                request,
                "adminpanel/settings.html",
                {
                    "profile_error":
                        "Full name and email are required.",
                    "show_edit_profile": True,
                }
            )

        if User.objects.filter(
            email=email
        ).exclude(
            id=user.id
        ).exists():

            return render(
                request,
                "adminpanel/settings.html",
                {
                    "profile_error":
                        "This email address is already in use.",
                    "show_edit_profile": True,
                }
            )

        user.full_name = full_name
        user.email = email

        user.save()

        return redirect("settings")

    return redirect("settings")


@active_admin_required
def change_password(request):

    if request.method == "POST":

        current_password = request.POST.get(
            "current_password"
        )

        new_password = request.POST.get(
            "new_password"
        )

        confirm_password = request.POST.get(
            "confirm_password"
        )

        if not request.user.check_password(
            current_password
        ):

            return render(
                request,
                "adminpanel/settings.html",
                {
                    "password_error":
                        "Current password is incorrect.",
                    "show_change_password": True,
                }
            )

        if len(new_password) < 8:

            return render(
                request,
                "adminpanel/settings.html",
                {
                    "password_error":
                        "New password must contain at least 8 characters.",
                    "show_change_password": True,
                }
            )

        if new_password != confirm_password:

            return render(
                request,
                "adminpanel/settings.html",
                {
                    "password_error":
                        "New passwords do not match.",
                    "show_change_password": True,
                }
            )

        request.user.set_password(
            new_password
        )

        request.user.save()

        update_session_auth_hash(
            request,
            request.user
        )

        return redirect("settings")

    return redirect("settings")


# =========================================================
# PASSWORD RESET
# =========================================================

class CustomPasswordResetView(PasswordResetView):

    template_name = "adminpanel/password_reset.html"

    email_template_name = (
        "adminpanel/password_reset_email.html"
    )

    subject_template_name = (
        "adminpanel/password_reset_subject.txt"
    )

    success_url = "/dashboard/password-reset/done/"


class CustomPasswordResetDoneView(
    PasswordResetDoneView
):

    template_name = (
        "adminpanel/password_reset_done.html"
    )


class CustomPasswordResetConfirmView(
    PasswordResetConfirmView
):

    template_name = (
        "adminpanel/password_reset_confirm.html"
    )

    success_url = (
        "/dashboard/password-reset/complete/"
    )


class CustomPasswordResetCompleteView(
    PasswordResetCompleteView
):

    template_name = (
        "adminpanel/password_reset_complete.html"
    )