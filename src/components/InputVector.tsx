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
import { useEffect } from "react";

type Props = {
  comp: number;
  vectorArr: Array<number>;
  setComp: (arr: Array<number>) => void;
};
const InputForm = ({ comp, vectorArr, setComp }: Props) => {
  useEffect(() => {
    setComp(Array(comp).fill(0));
  }, [comp]);

  return (
    <div>
      {Array.from(Array(comp).keys()).map((value, index) => {
        return (
          <IonItem key={index}>
            <IonInput
              placeholder={`Введіть елемент №${index}`}
              type="number"
              value={vectorArr[index]}
              onIonChange={(e) => {
                let temp = vectorArr.slice();
                temp[index] = parseInt(e.detail.value as string);
                setComp(temp);
              }}
            ></IonInput>
          </IonItem>
        );
      })}
    </div>
  );
};

export default InputForm;
