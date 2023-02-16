import classNames from 'classnames'
import { DemoTallContent } from '../demo-tall-content'
import coreDevDotStyles from 'layouts/core-dev-dot-layout/core-dev-dot-layout.module.css'
import baseNewStyles from 'layouts/base-new/base-new-layout.module.css'
import ssLayoutStyles from 'layouts/sidebar-sidecar/sidebar-sidecar-layout.module.css'
import mmStyles from 'components/mobile-menu-container/mobile-menu-container.module.css'
import s from './demo-composable-layout.module.css'

export interface TestLayoutProps {
	tallSidecar?: boolean
	tallSidebar?: boolean
	showVersionAlert?: boolean
}

function SidebarSidecarLayout({
	showVersionAlert,
	tallSidecar,
	tallSidebar,
}: TestLayoutProps) {
	return (
		<div className={coreDevDotStyles.root}>
			<div className={baseNewStyles.root}>
				<div className={baseNewStyles.header}>
					<div
						className={s.placeholder}
						style={{ minHeight: 'var(--navigation-header-height)' }}
					>
						Header Placeholder
					</div>
				</div>
				<div className={baseNewStyles.contentArea}>
					<div
						className={classNames(
							ssLayoutStyles.root,
							ssLayoutStyles['mainWidth-wide']
						)}
					>
						<div
							className={classNames(
								ssLayoutStyles.mobileMenuContainer,
								mmStyles.root,
								s.devBorder
							)}
						>
							<div className={ssLayoutStyles.sidebarContentWrapper}>
								{tallSidebar ? (
									<DemoTallContent title="Sidebar Content." />
								) : (
									'Sidebar Content.'
								)}
							</div>
						</div>
						<div className={ssLayoutStyles.contentWrapper}>
							{showVersionAlert ? (
								<div className={s.placeholder} style={{ minHeight: '53px' }}>
									Generic Alert Bar Placeholder
								</div>
							) : null}
							<div className={s.modifiedMainAreaWrapper}>
								<main className={ssLayoutStyles.main}>
									<div className={s.placeholder}>
										<DemoTallContent title="Main Content." />
									</div>
								</main>
								<div className={s.modifiedSidecarWrapper}>
									{tallSidecar ? (
										<DemoTallContent title="Sidecar Content." />
									) : (
										'Sidecar Content.'
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={baseNewStyles.footer}>
					<div className={s.placeholder} style={{ minHeight: '300px' }}>
						Footer Placeholder
					</div>
				</div>
			</div>
		</div>
	)
}

export default SidebarSidecarLayout
