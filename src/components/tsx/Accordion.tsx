import React , {useState} from 'react';

export default function Accordion({data,accordiondata}) {

    function openaccordion(id) {
        let elem = document.getElementById(id);
        elem.classList.contains("open") ? elem.classList.remove("open") : elem.classList.add("open");
    }

    function selecticon(elem : HTMLElement) {
        let parentelem : HTMLElement = elem.parentNode as HTMLElement;
        for (let child of parentelem.children) {
            child.classList.remove("selected");
        }
        elem.classList.add("selected");
    }
    
    const {iconForFeature} = accordiondata;

    let defaultContent = [];
    let toplevelfeature = [];
    data.forEach((entry)  => {
        const {wpParent,wpChildren} = entry;
        if (wpParent === null) { 
            toplevelfeature.push(entry);
            if (wpChildren.nodes[0] !== undefined) {
                let feature = iconForFeature.find((elem) => elem.feature.name === wpChildren.nodes[0].name);
                defaultContent.push({"text" : feature.bodyText, "image" : feature.image.sourceUrl});
                
            }
            else {
                defaultContent.push("");
            }
        }
    });
    const [Content,setContent] = useState(defaultContent);
    

    return(        
        <div className="Accordion">
            {
                toplevelfeature.map((entry,parentindex)  => {
                    const {name ,wpChildren} = entry;
                    return (     
                        <div key={`accordion-${name}`}>  
                            <div className="item" onClick={() => {openaccordion(`accordion-${name}`)}} aria-hidden>
                                {name}
                                <div className="plus"></div>
                            </div>
                            <div className="itemcontent" id={`accordion-${name}`}>
                                <ul>
                                    {
                                        wpChildren.nodes.map((child,index) => {

                                            let feature = iconForFeature.find((elem) => elem.feature.name === child.name);
                                            let url = feature.icon.sourceUrl;
                                            let array = [...Content];
                                            array[parentindex] = {"text": feature.bodyText , "image" : feature.image.sourceUrl};
                                            return (
                                                <li className= {index === 0 ? "selected" : ""} onClick={(event) => {setContent(array);selecticon(event.currentTarget)}} aria-hidden key={`accordioncontent-${feature.name}-${index}`}>
                                                    <div className='imageholder'>
                                                        <img width="80" height="80" src={url} alt=""/>
                                                    </div>
                                                    <h5>{child.name}</h5>                                     
                                                </li>
                                            );
                                        })
                                    }                                        
                                </ul>
                                <div className= {entry.wpChildren.nodes.length !== 0 ? 'contentholder' : 'hidden'}>
                                    {Content[parentindex].text}
                                    <div className='monitorimage'>
                                        <img alt = "" src={Content[parentindex].image}/>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    )                
                })
            }
        </div>
    );
}
