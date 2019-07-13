import SettingsModal from 'flarum/components/SettingsModal';

export default class YandexSettingsModal extends SettingsModal {
  className() {
    return 'YandexSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('dem13n-auth-yandex.admin.yandex_settings.title');
  }

  form() {
    return [
      <div className="Form-group">
        <label>{app.translator.trans('dem13n-auth-yandex.admin.yandex_settings.app_desc', { a: <a href="https://oauth.yandex.ru" target="_blank" /> })}</label>
        <label>{app.translator.trans("dem13n-auth-yandex.admin.yandex_settings.app_p")}</label>
        <b>{document.location.origin + "/auth/yandex"}</b>
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('dem13n-auth-yandex.admin.yandex_settings.app_id_label')}</label>
        <input className="FormControl" bidi={this.setting('dem13n-auth-yandex.app_id')}/>
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('dem13n-auth-yandex.admin.yandex_settings.app_password_label')}</label>
        <input className="FormControl" bidi={this.setting('dem13n-auth-yandex.app_password')}/>
      </div>
    ];
  }
}
