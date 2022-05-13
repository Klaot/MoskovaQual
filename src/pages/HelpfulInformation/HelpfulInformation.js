import '../HelpfulInformation/HelpfulInformation.css';
import AdditionalInformation from './AdditionalInformation';
import QuickInquairy from '../../components/QuickInquairy';

const HelpfulInformation = () => {

    return (
        <div className="container HelpfulInformation mobile-style">
            <div className="containerTwo">
                <div className="HelpfulInformation-header">
                <h1>Полезная информация</h1>
                </div>
                <AdditionalInformation />
            </div>
            <QuickInquairy />        
        </div>
    )
}

export default HelpfulInformation;