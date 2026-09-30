from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User


@admin.register(User)
class CustomUserAdmin(UserAdmin):
    model = User

    list_display = (
        "email",
        "full_name",
        "role",
        "status",
        "created_at",
        "is_staff",
    )

    list_filter = (
        "role",
        "status",
        "is_staff",
    )

    search_fields = (
        "email",
        "full_name",
    )

    ordering = ("email",)

    fieldsets = (
        (None, {"fields": ("email", "password")}),
        (
            "Personal Information",
            {"fields": ("full_name",)},
        ),
        (
            "Permissions",
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                )
            },
        ),
        (
            "HopeRise Information",
            {
                "fields": (
                    "role",
                    "status",
                    "created_at",
                )
            },
        ),
    )

    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "email",
                    "full_name",
                    "password1",
                    "password2",
                    "role",
                    "status",
                    "is_staff",
                    "is_active",
                ),
            },
        ),
    )

    readonly_fields = ("created_at",)