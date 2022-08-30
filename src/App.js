import { Trans, useTranslation } from 'react-i18next';
import './App.scss';
import logo from './logo.svg';

const lngs = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' },
};

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <div>
          {Object.keys(lngs).map(lng => (
            <button
              key={lng}
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
              }}
              type='submit'
              onClick={() => i18n.changeLanguage(lng)}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
        <p className='serious-error'>
          <Trans i18nKey='description.part1'>
            Edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          {t('description.part2')}
        </a>
      </header>
    </div>
  );
}

export default App;
