import { store as notifStore } from "react-notifications-component";

export const Notifications = {
  addNotification: (
    notif: Partial<{
      animationIn: any,
      animationOut: any,
      container: string,
      dismiss: any,
      message: string,
      title: string,
      type: string,
    }>
  ) => {
    const notifObj = {
      animationIn: notif.animationIn || ["animated", "fadeIn"], // animate.css classes that's applied
      animationOut: notif.animationOut || ["animated", "fadeOut"], // animate.css classes that's applied
      container: notif.container || "top-right", // where to position the notifications
      dismiss: notif.dismiss || {
        duration: 3000,
      },
      message: notif.message || "message",
      title: notif.title || "Title",
      type: notif.type || "default", // 'default', 'success', 'info', 'warning', 'danger'
    };
    notifStore.addNotification(notifObj);
  },
};
