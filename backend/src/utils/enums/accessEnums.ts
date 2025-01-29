export enum Roles {
    ADMIN = 'ADMIN',
    MODERATOR = 'MODERATOR',
    USER = 'USER',
    GUEST = 'GUEST'
}

export enum Status {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    SUSPENDED = 'SUSPENDED',
    DELETED = 'DELETED'
}

export enum Permissions {
    READ_ONLY = 'READ_ONLY',
    WRITE = 'WRITE',
    DELETE = 'DELETE',
    MANAGE_USERS = 'MANAGE_USERS',
    VIEW_DASHBOARD = 'VIEW_DASHBOARD',
    EDIT_CONTENT = 'EDIT_CONTENT',
}

export const RolePermissions = {
    [Roles.ADMIN]: [
        Permissions.READ_ONLY,
        Permissions.WRITE,
        Permissions.DELETE,
        Permissions.MANAGE_USERS,
        Permissions.VIEW_DASHBOARD,
        Permissions.EDIT_CONTENT,
    ],
    [Roles.MODERATOR]: [
        Permissions.READ_ONLY,
        Permissions.WRITE,
        Permissions.VIEW_DASHBOARD,
        Permissions.EDIT_CONTENT,
    ],
    [Roles.USER]: [
        Permissions.READ_ONLY,
        Permissions.VIEW_DASHBOARD,
    ],
    [Roles.GUEST]: [
        Permissions.READ_ONLY,
    ],
};