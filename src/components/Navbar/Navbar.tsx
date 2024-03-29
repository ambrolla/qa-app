import { useEffect, useState } from 'react'
import { Layout, Button, Drawer } from 'antd'
import RightMenu from './RightMenu'
import { MenuOutlined } from '@ant-design/icons'
import { useLocation } from 'react-router-dom'
import LeftMenu from './LeftMenu'

import styles from './Navbar.module.scss'
import { logo } from '../../assets'

const Navbar = () => {
	const [visible, setVisible] = useState(false)
	const showDrawer = () => {
		setVisible(!visible)
	}

	// If you do not want to auto-close the mobile drawer when a path is selected
	// Delete or comment out the code block below
	// From here
	const { pathname: location } = useLocation()
	useEffect(() => {
		setVisible(false)
	}, [location])
	// Upto here

	return (
		<nav className={styles.navbar}>
			<Layout>
				<Layout.Header className={styles.nav_header}>
					<div className={styles.logo}>
						<img src={logo} className={styles.logo_img} />
					</div>
					<div className={styles.navbar_menu}>
						<div className={styles.leftMenu}>
							<LeftMenu mode={'horizontal'} />
						</div>
						<Button
							className={styles.menuButton}
							type='text'
							onClick={showDrawer}
						>
							<MenuOutlined />
						</Button>
						<div className={styles.rightMenu}>
							<RightMenu mode={'horizontal'} />
						</div>

						<Drawer
							title={'Brand Here'}
							placement='right'
							closable={true}
							onClose={showDrawer}
							visible={visible}
							style={{ zIndex: 99999 }}
						>
							<LeftMenu mode={'inline'} />
							<RightMenu mode={'inline'} />
						</Drawer>
					</div>
				</Layout.Header>
			</Layout>
		</nav>
	)
}

export default Navbar
