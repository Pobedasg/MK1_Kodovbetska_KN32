import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import Form from "./Form";

const Home: React.FC = () => {
  return (
    <IonPage>
      <Form />
    </IonPage>
  );
};

export default Home;
