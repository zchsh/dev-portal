import NavigationHeader from 'components/navigation-header'
import AlertBanner from 'components/alert-banner'
import s from './base-new-layout.module.css'

const BaseNewLayout: React.FC = ({ children }) => {
  return (
    <>
      <div className={s.stickyContainer}>
        <AlertBanner type="highlight">
          <p>
            You are viewing an internal preview and work in progress version of
            this site.{' '}
            <a
              href="https://airtable.com/shrU3eYHIOXO60o23"
              rel="noopener noreferrer"
              target="_blank"
            >
              We'd love to hear your feedback
            </a>
            !
          </p>
        </AlertBanner>
        <NavigationHeader />
      </div>
      {children}
    </>
  )
}

export default BaseNewLayout
