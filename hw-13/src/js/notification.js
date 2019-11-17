import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';

PNotify.defaults.styling = 'material';
PNotify.defaults.icons = 'material';

export const infoNotification = () => {
  return PNotify.info({
    title: 'Info',
    text: "Images didn't find",
    hide: false,
  });
};

export const successNotification = () => {
  return PNotify.success({
    title: 'Success!',
    text: 'Images found',
  });
};

export const errorNotification = () => {
  return PNotify.error({
    title: 'Oops',
    text: 'Something went wrong',
    hide: false,
  });
};
