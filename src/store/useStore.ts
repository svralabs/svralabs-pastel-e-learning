import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthState = {
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string;
  } | null;
  token: string | null;
  isAuthenticated: boolean;
};

type ThemeState = {
  darkMode: boolean;
};

type Notification = {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  timestamp: Date;
};

type NotificationState = {
  notifications: Notification[];
};

type StoreState = AuthState & ThemeState & NotificationState;

type StoreActions = {
  login: (user: AuthState['user'], token: string) => void;
  logout: () => void;
  toggleTheme: () => void;
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void;
  removeNotification: (id: string) => void;
};

const useStore = create<StoreState & StoreActions>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      darkMode: false,
      notifications: [],

      login: (user, token) =>
        set({ user, token, isAuthenticated: true }),
      logout: () =>
        set({ user: null, token: null, isAuthenticated: false }),
      toggleTheme: () =>
        set((state) => ({ darkMode: !state.darkMode })),
      addNotification: (notification) =>
        set((state) => ({
          notifications: [
            ...state.notifications,
            {
              ...notification,
              id: Date.now().toString(),
              timestamp: new Date(),
            },
          ],
        })),
      removeNotification: (id) =>
        set((state) => ({
          notifications: state.notifications.filter(
            (notification) => notification.id !== id
          ),
        })),
    }),
    {
      name: 'svralabs-pastel-e-learning-store',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        darkMode: state.darkMode,
      }),
    }
  )
);

export const useAuthStore = () => useStore((state) => ({
  user: state.user,
  token: state.token,
  isAuthenticated: state.isAuthenticated,
  login: state.login,
  logout: state.logout,
}));

export const useThemeStore = () => useStore((state) => ({
  darkMode: state.darkMode,
  toggleTheme: state.toggleTheme,
}));

export const useNotificationStore = () => useStore((state) => ({
  notifications: state.notifications,
  addNotification: state.addNotification,
  removeNotification: state.removeNotification,
}));

export default useStore;
