import { Tabs } from 'antd'
import FormMain from '../components/AutoTestsGenerateForm/FormMain/FormMain'
import FormTitles from '../components/AutoTestsGenerateForm/FormTitles/FormTitles'
import ContainerLeft from '../components/Containers/ContainerLeft/ContainerLeft'
import ContainerRight from '../components/Containers/ContainerRight/ConteinerRight'
import { StompSessionProvider } from 'react-stomp-hooks'
import { Subscribing } from '../components/AutoTestsGenerateForm/Subscribing/Subscribing'
const { TabPane } = Tabs

const AutoTestsFormPage: React.FC = () => {
	return (
		<StompSessionProvider
			url={'http://localhost:8080/ws'}
			// url={'https://api.autotests.cloud'}
		>
			<ContainerLeft>
				<FormMain />
			</ContainerLeft>
			<ContainerRight>
				<Tabs defaultActiveKey='2' type='card'>
					<TabPane tab='Documentation' key='1'>
						<FormTitles />
					</TabPane>
					<TabPane tab='Console output' key='2'>
						<Subscribing />
					</TabPane>
				</Tabs>
			</ContainerRight>
		</StompSessionProvider>
	)
}

export default AutoTestsFormPage
