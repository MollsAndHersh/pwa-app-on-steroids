function notifyMe () {
  if (!("Notification" in window)) {
    alert("This browser doesn't support notifications yet");
    return false
  } 
  if (Notification.permission === "granted") {
    new Notification("PWA", {body: "Woaw my browser can do that?"})
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission((permission) => {
      if(!('permission' in Notification)) {
        Notification.permission = permission;
      }
      if (permission === "granted") {
        new Notification("PWA", {body: "Woaw my browser can do that?"})
      }
    })
  }
  return false
}