import { extend } from 'flarum/extend';
import app from 'flarum/app';
import LogInButtons from 'flarum/components/LogInButtons';
import LogInButton from 'flarum/components/LogInButton';

app.initializers.add('dem13n-auth-yandex', () => {
  extend(LogInButtons.prototype, 'items', function(items) {
    items.add('yandex',
      <LogInButton
        className="Button LogInButton--yandex"
        icon="fab fa-yandex"
        path="/auth/yandex">
        {app.translator.trans('dem13n-auth-yandex.forum.login_with_yandex_button')}
      </LogInButton>
    );
  });
});
