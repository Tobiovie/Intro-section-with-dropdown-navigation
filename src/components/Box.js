import meet  from '../images/client-meet.svg'
import databiz  from '../images/client-databiz.svg'
import audiophile  from '../images/client-audiophile.svg'
import maker  from '../images/client-maker.svg'
const Box=()=>{
    return (
        <div className='box'>
            <div className='remote'>Make <span>remote work</span></div>
            <div>
                Get your team in sync,no matter your location.<br/>
                streamline processes,create team rituals,and<br/>
                watch productivity soar.
            </div>
            <div className='learn'>Learn more</div>
            <div>
                <img alt='iuuu' src={databiz}/>
                 <img src={audiophile} alt='sbb'/>
                 <img src={meet} alt='sbb'/>
                 <img src={meet} alt='sbb'/>
                 <img src={maker} alt='sbb'/>
            </div>
        </div>
    )
}
export default Box