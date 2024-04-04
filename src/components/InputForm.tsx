import {
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "./ExploreContainer";

type Props = {
  comp: number;
  setComp: (value: number) => void;
};
const InputForm = ({ comp, setComp }: Props) => {
  return (
    <div>
      <IonItem>
        <IonInput
          type="number"
          placeholder={"Введіть бажану розмірність векторів"}
          value={comp}
          onIonChange={(e) => {
            let num = parseInt(e.detail.value as string);
            if (num < 0 || num > 6) {
              setComp(0);
              return;
            }
            setComp(num);
          }}
        ></IonInput>
      </IonItem>
    </div>
  );
};

export default InputForm;
