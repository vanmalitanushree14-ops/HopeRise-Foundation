from django.contrib import admin
from .models import Volunteer, Donation, Project, Beneficiary, Campaign, Event

@admin.register(Volunteer)
class VolunteerAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "email",
        "area",
        "joined_date",
        "status",
    )

    list_filter = (
        "status",
        "area",
    )

    search_fields = (
        "name",
        "email",
    )

    ordering = (
        "-created_at",
    )


@admin.register(Donation)
class DonationAdmin(admin.ModelAdmin):

    list_display = (
        "donor_name",
        "email",
        "amount",
        "donation_date",
        "status",
    )

    list_filter = (
        "status",
        "donation_date",
    )

    search_fields = (
        "donor_name",
        "email",
    )

    ordering = (
        "-created_at",
    )


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "location",
        "status",
        "start_date",
        "end_date",
        "created_at",
    )

    list_filter = (
        "status",
        "location",
    )

    search_fields = (
        "name",
        "location",
        "description",
    )

    ordering = (
        "-created_at",
    )


@admin.register(Beneficiary)
class BeneficiaryAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "email",
        "phone",
        "age",
        "location",
        "support_type",
        "status",
        "registered_date",
    )

    list_filter = (
        "status",
        "support_type",
        "location",
    )

    search_fields = (
        "name",
        "email",
        "phone",
        "location",
        "support_type",
    )

    ordering = (
        "-created_at",
    )

@admin.register(Campaign)
class CampaignAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "target_amount",
        "raised_amount",
        "start_date",
        "end_date",
        "status",
        "created_at",
    )

    list_filter = (
        "status",
        "start_date",
    )

    search_fields = (
        "name",
        "description",
    )

    ordering = (
        "-created_at",
    )

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "location",
        "event_date",
        "event_time",
        "organizer",
        "status",
        "created_at",
    )

    list_filter = (
        "status",
        "event_date",
        "location",
    )

    search_fields = (
        "name",
        "location",
        "organizer",
        "description",
    )

    ordering = ("-event_date",)