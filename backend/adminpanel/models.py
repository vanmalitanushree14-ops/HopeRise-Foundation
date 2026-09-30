from django.db import models


class Volunteer(models.Model):

    STATUS_CHOICES = [
        ("active", "Active"),
        ("pending", "Pending"),
        ("inactive", "Inactive"),
    ]

    name = models.CharField(max_length=100)

    email = models.EmailField()

    area = models.CharField(max_length=100)

    joined_date = models.DateField(auto_now_add=True)

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="pending"
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.name


class Donation(models.Model):

    STATUS_CHOICES = [
        ("completed", "Completed"),
        ("pending", "Pending"),
    ]

    donor_name = models.CharField(max_length=100)

    email = models.EmailField()

    amount = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    donation_date = models.DateField(
        auto_now_add=True
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="completed"
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.donor_name


class Project(models.Model):
    STATUS_CHOICES = [
        ("ongoing", "Ongoing"),
        ("completed", "Completed"),
        ("upcoming", "Upcoming"),
    ]

    name = models.CharField(max_length=150)
    description = models.TextField()
    location = models.CharField(max_length=150)
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="upcoming"
    )
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)

    registered_date = models.DateField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    

class Beneficiary(models.Model):

    STATUS_CHOICES = [
        ("active", "Active"),
        ("inactive", "Inactive"),
    ]

    name = models.CharField(max_length=100)

    email = models.EmailField(
        blank=True,
        null=True
    )

    phone = models.CharField(
        max_length=20,
        blank=True,
        null=True
    )

    age = models.PositiveIntegerField(
        blank=True,
        null=True
    )

    location = models.CharField(
        max_length=150
    )

    support_type = models.CharField(
        max_length=100
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="active"
    )

    registered_date = models.DateField(
        auto_now_add=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.name

class Campaign(models.Model):

    STATUS_CHOICES = [
        ("active", "Active"),
        ("completed", "Completed"),
        ("upcoming", "Upcoming"),
    ]

    name = models.CharField(max_length=150)

    description = models.TextField()

    target_amount = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0
    )

    raised_amount = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0
    )

    start_date = models.DateField()

    end_date = models.DateField(
        blank=True,
        null=True
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="upcoming"
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.name

class Event(models.Model):

    STATUS_CHOICES = [
        ("upcoming", "Upcoming"),
        ("ongoing", "Ongoing"),
        ("completed", "Completed"),
    ]

    name = models.CharField(max_length=150)

    description = models.TextField()

    location = models.CharField(max_length=200)

    event_date = models.DateField()

    event_time = models.TimeField(
        blank=True,
        null=True
    )

    organizer = models.CharField(
        max_length=100,
        blank=True,
        null=True
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="upcoming"
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.name