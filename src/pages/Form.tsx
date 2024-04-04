import {
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import InputForm from "../components/InputForm";
import InputVector from "../components/InputVector";

import { useEffect, useState } from "react";
import { Calculation, Operation } from "../features/Calculation";

const Form: React.FC = () => {
  const [size, setSize] = useState<number>(0);
  const [calc, setCalc] = useState<Calculation>();
  const [arrayFirst, setArrayFirst] = useState<Array<number>>([]);
  const [arraySecond, setArraySecond] = useState<Array<number>>([]);
  const [type, setAdd] = useState<Operation>("add");

  useEffect(() => {
    setCalc(new Calculation(arrayFirst, arraySecond, type));
  }, [arrayFirst, arraySecond, type]);
  return (
    <div>
      <IonText> Введіть розмірність(до 6)</IonText>
      <InputForm comp={size} setComp={setSize} />
      <IonText> Введіть значення для вектора №1</IonText>
      <InputVector comp={size} vectorArr={arrayFirst} setComp={setArrayFirst} />
      <IonText> Введіть значення для вектора №2</IonText>
      <InputVector
        comp={size}
        vectorArr={arraySecond}
        setComp={setArraySecond}
      />
      <IonSelect
        value="add"
        onIonChange={(e) => {
          setAdd(e.detail.value);
        }}
      >
        <IonSelectOption value="add">Add</IonSelectOption>
        <IonSelectOption value="substraction">Sub</IonSelectOption>
        <IonSelectOption value="scalar multiply">Multiply</IonSelectOption>
      </IonSelect>
      {calc?.show().map((item, index) => {
        return (
          <IonItem key={index}>
            <IonText>{item}</IonText>
          </IonItem>
        );
      })}
    </div>
  );
};

export default Form;
