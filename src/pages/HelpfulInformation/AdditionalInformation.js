import '../HelpfulInformation/AdditionalInformation.css';
import AncientScroll from '../../img/HelpfulInformation/AncientScroll.png';
import InteractivePng from '../../img/HelpfulInformation/interactive.png';
import QualityPng from '../../img/HelpfulInformation/quality.png';
import { BrowserRouter, Link, Routes , Route } from "react-router-dom";
import HistoryAndCompatibility from './HistoryAndCompatibility';


const AdditionalInformation = () => {



    return (
        <>
        <section className="AdditionalInformation">
        <div className="Additional-item">
            <div className="Additional-item-all">
                <div className="Additional">
                <Link to='/AdditionalInformation'><img src={ AncientScroll } alt="AncientScroll"/></Link>
                </div>
                <p>Стиральные машины
                История и современность</p>
            </div>
        </div>
        <div className="Additional-item">
            <div className="Additional-item-all">
                <div className="Additional">
                    <img src={ InteractivePng } alt="interactive.png"/>
                </div>
                <p>Коды ошибок
                стиральных машин</p>
            </div>
        </div>
        <div className="Additional-item">
            <div className="Additional-item-all">
                <div className="Additional">
                    <img src={ QualityPng } alt="quality.png"/>
                </div>
                <p>Работы наших мастеров</p>
            </div>
        </div>
        </section>
        <Routes>
            <Route exact path='/AdditionalInformation' element={<HistoryAndCompatibility />}/>
        </Routes>
        {/* <HistoryAndCompatibility /> */}
        </>
    )
}

export default AdditionalInformation;