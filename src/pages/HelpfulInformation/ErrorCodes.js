import QuickInquairy from '../../components/QuickInquairy';
import StarPng from '../..//img/guarantee/star.png';
import './ErrorCodes.css';
import { Link } from 'react-router-dom';

const ErrorCodes = () => {

 const errorList = [
     { name: 'BOSCH', id: 1 },
     { name: 'INDESIT', id: 2 },
     { name: 'HAIER (в разработке)', id: 3 },
     { name: 'HANSA (в разработке)', id: 4 },
     { name: 'LG (в разработке)', id: 5 },
     { name: 'SAMSUNG (в разработке)', id: 6 },
     { name: 'ARISTON и HOTPOINT-ARISTON (в разработке)', id: 7 },
     { name: 'ATLANT (в разработке)', id: 8 },
     { name: 'ELECTROLUX (в разработке)', id: 9 },
     { name: 'SIEMENS (в разработке)', id: 10 },
     { name: 'WHIRLPOOL (в разработке)', id: 11 },
     { name: 'CANDY (в разработке)', id: 12 },
     { name: 'GORENJE (в разработке)', id: 13 },
 ]

    return (
        <div className='container QuestionAndAnswer'>
            <div className='containerTwo'>
                <div className='QuestionAndAnswer-header'>
                    <h1>Коды ошибок стиральных машин</h1>
                    <h3>Ниже представлены ссылки на коды ошибок стиральных машин
                       популярных производителей и способы самостоятельного устранения и ремонта:</h3>
                </div>
                <div className='error-breands'>
                {errorList.map((item) => {
                  return (
                      <div className='ErrorCodes' key={item.id}>
                        <img src={StarPng} alt="StarPng" />
                        <Link key={item.id} to={`/ErrorCodes/${item.name}`}><p>{item.name}</p></Link>
                      </div>
                  )   
                })}
                </div>
            </div>
            <QuickInquairy />
        </div>
    )
}

export default ErrorCodes;