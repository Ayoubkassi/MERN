import { useEffect , useState , useContext } from 'react';
import { FirebaseContext } from '../context/firebase';


export default function useContent(target){
  const [content,setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(()=>{
    firebase.firestore().collection(target)
    .get().then((snapshot)=>{
      const allContent = snapshot.docs.map((contentObject)=> ({
        ...contentObject.data(),
        docId : contentObject.id
      }));
      setContent(allContent);
    }).catch((err)=>{
      console.log(err.message);
    });
  },[]);
  return { [target] : content };
}
