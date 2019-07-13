import app from 'flarum/app';

import YandexSettingsModal from './components/YandexSettingsModal';

app.initializers.add('dem13n-auth-yandex', () => {
  app.extensionSettings['dem13n-auth-yandex'] = () => app.modal.show(new YandexSettingsModal());
});
