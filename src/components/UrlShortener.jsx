import { data } from "autoprefixer";
import { useState } from "react";

let nextId = 0;


export default function UrlShortener() {
    const [url, setUrl] = useState('')
    const [error, setError] = useState(false)
    const [urlList, setUrlList] = useState([])
    const [copied, setcopies] = useState(false)
    const [copiedId, setCopiedId] = useState(null)


const shortenHandle = () => {
  if(url !== '') {
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`, {
      method: 'GET', 
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.ok) {
        setUrlList([
          {id:nextId++, url:url, shortenedUrl: data.result.full_short_link, originalLink: data.result.original_link },
          ...urlList
        ]);
        console.log(data)
        setUrl('');
        setError(false);
      } else {
        setError(true);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      setError(true);
    });
  } else {
    setError(true)
  }
}



const copyHandle = (id, url) => {
  navigator.clipboard.writeText(url).then(() => {
    setCopiedId(id); // set copiedId to the copied url's id
}).catch(err => {
    console.error('Error:', err);
});
}



  return (
<>
    <div className=" lg:hidden  w-[100vw] bg-color1  flex justify-center items-center flex-col relative">
        <div className=" bg-color3 w-[327px] mb-[24px] rounded-xl mt-[-35px] ">
            <input className={`mt-[24px] ml-[24px] w-[279px] mb-[16px] ${error ? 'border border-red-600' : ''}`} value={url} onChange={e => setUrl(e.target.value)}/>
            {error ? (<p className="text-red-500 mt-[-10px] text-[12px] ml-[24px] mb-[16px]">Please add a link</p>):null}
            <div className="mb-[24px] ml-[24px] bg-color5 w-[279px] h-[48px] flex justify-center items-center rounded">
               <p className="text-white font-bold " onClick={shortenHandle}>Shorten It!</p>
            </div>
        </div>

        
        {urlList.map(list => (
            <div key={list.id} className="w-[327px] h-[155px] bg-white mb-[24px]">
            <div className=" border-b-2 h-[48px] flex items-center">
             <p className="ml-[16px] ">{list.originalLink}</p>
            </div>
            <p className="ml-[16px] mt-[6px] text-color5" >{list.shortenedUrl}</p>
            {copiedId !== list.id ? (
                <div className="w-[295px] h-[40px] ml-[16px] mt-[8px] bg-color5 text-color1 text-[16px] flex justify-center items-center" onClick={() => copyHandle(list.id, list.shortenedUrl)}> copy</div>
            ): (
                <div className="w-[295px] h-[40px] ml-[16px] mt-[8px] bg-color3 text-color1 text-[16px] flex justify-center items-center" onClick={() => copyHandle(list.id, list.shortenedUrl)}> copied</div>
            )}

            </div>
        ))}
    </div>

    <div className=" hidden lg:flex first-letter:  w-[100vw] bg-color1  flex justify-center items-center flex-col relative">
        <div className=" bg-color3 w-[1110px] h-[168px] mb-[24px] flex flex-row justify-center item rounded-xl mt-[-90px] ">
          <div className="flex flex-col mt-[52px]">
          <input className={`ml-[24px] w-[769px] h-[68px] mb-[16px] rounded-xl pl-[20px]  ${error ? 'border-2 border-red-600' : ''}`} value={url} placeholder="Shorten a link here..." onChange={e => setUrl(e.target.value)}/>
            {error ? (<p className="text-red-500 mt-[-10px] text-[16px] ml-[24px] mb-[16px]">Please add a link</p>):null}
          </div>
            <div className="mb-[24px] ml-[24px] bg-color5 w-[188px] h-[64px] flex justify-center items-center rounded mt-[52px] cursor-pointer hover:bg-color7 ">
               <p className="text-white font-bold cursor-pointer  " onClick={shortenHandle}>Shorten It!</p>
            </div>
        </div>

        
        {urlList.map(list => (
            <div key={list.id} className="w-[1110px] h-[72px] bg-white mb-[24px] flex justify-center items-center justify-between">
              <p className=" ml-[32px]">{list.originalLink}</p>
              <div className="flex items-center">
                  <p className="ml-[16px] mt-[6px] text-color5" >{list.shortenedUrl}</p>
                {copiedId !== list.id ? (
                    <div className="w-[103px] h-[40px] ml-[24px] mr-[24px]  bg-color5 hover:bg-color7 text-color1 text-[16px] flex justify-center items-center cursor-pointer rounded-xl" onClick={() => copyHandle(list.id, list.shortenedUrl)}> copy</div>
                ): (
                    <div className="w-[103px] h-[40px] ml-[24px] mr-[24px]  bg-color3 text-color1 text-[16px] flex justify-center items-center cursor-pointer rounded-xl" onClick={() => copyHandle(list.id, list.shortenedUrl)}> copied</div>
                )}
              </div>
            
            </div>
        ))}
    </div>

    
</>
  )
}
