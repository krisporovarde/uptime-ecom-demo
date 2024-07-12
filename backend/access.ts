import { permissionsList } from './schemas/fields';
import { ListAccessArgs } from './types';

export function isSignedIn({ session }: ListAccessArgs) {
    // if signed in then returns true if not then false
    return !!session;
}

// Option 1
// export const permissions = {
//     canManageProducts({ session }) {
//         return session?.data.role?.canManageProducts;
//     },
//     canManageUsers({ session }) {
//         return session?.data.role?.canManageUsers;
//     },
// };

// Option 2
const generatedPermissions = Object.fromEntries(
    permissionsList.map((permission) => [
        permission,
        function ({ session }: ListAccessArgs) {
            return !!session?.data.role?.[permission];
        },
    ])
);

export const permissions = {
    ...generatedPermissions,
};

export const rules = {
    canManageProducts({ session }: ListAccessArgs) {
        if (!isSignedIn({ session })) return false;
        if (permissions.canManageProducts({ session })) {
            return true;
        }

        return { user: { id: session.itemId } };
    },
    canReadProducst({ session }: ListAccessArgs) {
        if (!isSignedIn({ session })) return false;
        if (permissions.canManageProducts({ session })) {
            return true;
        }

        return { status: 'AVAILABLE' };
    },
    canOrder({ session }: ListAccessArgs) {
        if (!isSignedIn({ session })) return false;
        if (permissions.canManageCart({ session })) {
            return true;
        }

        return { user: { id: session.itemId } };
    },
    canManageOrderItems({ session }: ListAccessArgs) {
        if (!isSignedIn({ session })) return false;
        if (permissions.canManageCart({ session })) {
            return true;
        }

        return { order: { user: { id: session.itemId } } };
    },
    canManageUsers({ session }: ListAccessArgs) {
        if (!isSignedIn({ session })) return false;
        if (permissions.canManageUsers({ session })) {
            return true;
        }

        // can only update themselves
        return { id: session.itemId };
    },
};
