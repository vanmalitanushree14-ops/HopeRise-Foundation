from django.contrib.auth import views as auth_views
from django.urls import path
from . import views


urlpatterns = [

    # =========================
    # AUTHENTICATION
    # =========================

    path(
        "login/",
        views.login_view,
        name="login"
    ),

    path(
        "logout/",
        views.logout_view,
        name="logout"
    ),


    # =========================
    # PASSWORD RESET
    # =========================

    path(
        "password-reset/",
        auth_views.PasswordResetView.as_view(
            template_name="adminpanel/password_reset.html",
            email_template_name="adminpanel/password_reset_email.html",
            subject_template_name="adminpanel/password_reset_subject.txt",
            success_url="/dashboard/password-reset/done/",
        ),
        name="password_reset",
    ),

    path(
        "password-reset/done/",
        auth_views.PasswordResetDoneView.as_view(
            template_name="adminpanel/password_reset_done.html"
        ),
        name="password_reset_done",
    ),

    path(
        "password-reset/<uidb64>/<token>/",
        auth_views.PasswordResetConfirmView.as_view(
            template_name="adminpanel/password_reset_confirm.html",
            success_url="/dashboard/password-reset/complete/",
        ),
        name="password_reset_confirm",
    ),

    path(
        "password-reset/complete/",
        auth_views.PasswordResetCompleteView.as_view(
            template_name="adminpanel/password_reset_complete.html"
        ),
        name="password_reset_complete",
    ),


    # =========================
    # MAIN PAGES
    # =========================

    path(
        "",
        views.dashboard,
        name="dashboard"
    ),

    path(
        "donations/",
        views.donations,
        name="donations"
    ),

    path(
        "volunteers/",
        views.volunteers,
        name="volunteers"
    ),

    path(
        "projects/",
        views.projects,
        name="projects"
    ),

    path(
        "beneficiaries/",
        views.beneficiaries,
        name="beneficiaries"
    ),

    path(
        "campaigns/",
        views.campaigns,
        name="campaigns"
    ),

    path(
        "events/",
        views.events,
        name="events"
    ),

    path(
        "reports/",
        views.reports,
        name="reports"
    ),

    


    # =========================
    # VOLUNTEER CRUD
    # =========================

    path(
        "volunteers/edit/<int:volunteer_id>/",
        views.volunteer_edit,
        name="volunteer_edit"
    ),

    path(
        "volunteers/delete/<int:volunteer_id>/",
        views.volunteer_delete,
        name="volunteer_delete"
    ),


    # =========================
    # DONATION CRUD
    # =========================

    path(
        "donations/view/<int:donation_id>/",
        views.donation_view,
        name="donation_view"
    ),

    path(
        "donations/edit/<int:donation_id>/",
        views.donation_edit,
        name="donation_edit"
    ),

    path(
        "donations/delete/<int:donation_id>/",
        views.donation_delete,
        name="donation_delete"
    ),

    # =========================
# PROJECT CRUD
# =========================

    path(
    "projects/view/<int:project_id>/",
    views.project_view,
    name="project_view"
),

path(
    "projects/edit/<int:project_id>/",
    views.project_edit,
    name="project_edit"
),

path(
    "projects/delete/<int:project_id>/",
    views.project_delete,
    name="project_delete"
),

path(
    "beneficiaries/view/<int:beneficiary_id>/",
    views.beneficiary_view,
    name="beneficiary_view"
),

path(
    "beneficiaries/edit/<int:beneficiary_id>/",
    views.beneficiary_edit,
    name="beneficiary_edit"
),

path(
    "beneficiaries/delete/<int:beneficiary_id>/",
    views.beneficiary_delete,
    name="beneficiary_delete"
),

    # =========================
    # CAMPAIGN CRUD
    # =========================

    path(
        "campaigns/view/<int:campaign_id>/",
        views.campaign_view,
        name="campaign_view"
    ),

    path(
        "campaigns/edit/<int:campaign_id>/",
        views.campaign_edit,
        name="campaign_edit"
    ),

    path(
        "campaigns/delete/<int:campaign_id>/",
        views.campaign_delete,
        name="campaign_delete"
    ),

# =========================
# EVENT CRUD
# =========================

    path(
        "events/view/<int:event_id>/",
        views.event_view,
        name="event_view"
    ),

    path(
        "events/edit/<int:event_id>/",
        views.event_edit,
        name="event_edit"
    ),

    path(
        "events/delete/<int:event_id>/",
        views.event_delete,
        name="event_delete"
    ),

# =========================
# SETTINGS
# =========================
path("settings/", views.settings, name="settings"),

path(
    "settings/edit-profile/",
    views.edit_profile,
    name="edit_profile"
),

path(
    "settings/change-password/",
    views.change_password,
    name="change_password"
),

    ]