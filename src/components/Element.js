import {useState} from 'react';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
const Element = ({img,title}) => {
    const [files,doctrine] = useState([
        {img:img1,title:'Tv news producer, dad of 2, dies suddenly at 37'},
        {img:img2,title:'Muslim mon on frustrations with ubiquity of christmas'},
        {img:img3,title:'I came out of surgery, and I cant believe it'},
        {img:img4,title:'McConnel draws harsh criticism from Great senators'},
        {img:img5,title:'A new fitness and relationships, our take'},

    ])
    return ( 
     <div>
        {files.map((file)=>(
            <div key={file.img} className='w-1/5 py-2  inline-block rounded-full gap-1'>
                <img src={file.img} className='object-cover  rounded-md h-24 w-[93%]' />
                <div className="text-xs py-2 text-start font-semibold">{file.title}</div>
            </div>
        ))}
        
     </div>
     );
}
 
export default Element;