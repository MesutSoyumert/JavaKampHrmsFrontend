import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Dropdown,
  Input,
  TextArea,
  Card,
  Form,
  Grid,
} from "semantic-ui-react";
import CitiesOfTurkeyService from "../services/citiesOfTurkeyService";
import GeneralJobPositionService from "../services/generalJobPositionService";
import JobAdvertisementService from "../services/jobAdvertisementService";
import JobAdvertisementJobPositionPlaceService from "../services/job Advertisement Job Position PlaceService";
import JobAdvertisementWorkingTypeService from "../services/jobAdvertisementWorkingType";

export default function JobAdvertisementCreate() {
  let jobAdvertisementService = new JobAdvertisementService();

  const JobAdvertAddSchema = Yup.object().shape({
    lastDate: Yup.date()
      .nullable()
      .required("Bu alanın doldurulması zorunludur"),
    description: Yup.string().required("Bu alanın doldurulması zorunludur"),
    jobPositionId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    workTimeId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    workPlaceId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    openPositions: Yup.string()
      .required("Posizyon sayısı zorunludur")
      .min(1, "Posizyon sayısı 1 den küçük olamaz"),
    cityId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    minSalary: Yup.number()
      .min(0, "0 Dan az olamaz")
      .required("Bu alan zorunludur"),
    maxSalary: Yup.number()
      .min(0, "0 Dan az olamaz")
      .required("Bu alan zorunludur"),
  });

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      description: "",
      jobPositionId: "",
      workTimeId: "",
      workPlaceId: "",
      openPositions: "",
      cityId: "",
      minSalary: "",
      maxSalary: "",
      lastDate: "",
    },
    validationSchema: JobAdvertAddSchema,
    onSubmit: (values) => {
      values.employerId = 1;
      jobAdvertisementService
        .addJobAdvertisement(values)
        .then((result) => console.log(result.data.data));
      alert(
        "İş ilanı eklendi, Sistem Çalışanı onayının ardından listelenecektir"
      );
      history.push("/jobadvertisements");
    },
  });

  const [
    jobAdvertisementJobPositionPlaces,
    setJobAdvertisementJobPositionPlaces,
  ] = useState([]);
  const [jobAdvertisementWorkingTypes, setJobAdvertisementWorkingTypes] =
    useState([]);
  const [citiesOfTurkeys, setCitiesOfTurkeys] = useState([]);
  const [generalJobPositions, setgeneralJobPositions] = useState([]);

  useEffect(() => {
    let jobAdvertisementWorkingTypeService =
      new JobAdvertisementWorkingTypeService();
    let jobAdvertisementJobPositionPlaceService =
      new JobAdvertisementJobPositionPlaceService();
    let citiesOfTurkeyService = new CitiesOfTurkeyService();
    let generalJobPositionService = new GeneralJobPositionService();

    jobAdvertisementWorkingTypeService
      .getJobAdvertisementWorkingTypes()
      .then((result) => setJobAdvertisementWorkingTypes(result.data.data));
    jobAdvertisementJobPositionPlaceService
      .getJobAdvertisementJobPositionPlaces()
      .then((result) => setJobAdvertisementJobPositionPlaces(result.data.data));
    citiesOfTurkeyService
      .getCitiesOfTurkey()
      .then((result) => setCitiesOfTurkeys(result.data.data));
    generalJobPositionService
      .getGeneralJobPositions()
      .then((result) => setgeneralJobPositions(result.data.data));
  }, []);

  const workPlaceOption = jobAdvertisementJobPositionPlaces.map(
    (jobAdvertisementJobPositionPlace) => ({
      key: jobAdvertisementJobPositionPlace.id,
      text: jobAdvertisementJobPositionPlace.jobPositionPlace,
      value: jobAdvertisementJobPositionPlace.id,
    })
  );
  const workTimeOption = jobAdvertisementWorkingTypes.map(
    (jobAdvertisementJobPositionWorkingType) => ({
      key: jobAdvertisementJobPositionWorkingType.id,
      text: jobAdvertisementJobPositionWorkingType.jobPositionWorkingType,
      value: jobAdvertisementJobPositionWorkingType.id,
    })
  );
  const cityOption = citiesOfTurkeys.map((citiesOfTurkey) => ({
    key: citiesOfTurkey.id,
    text: citiesOfTurkey.citiesOfTurkeyName,
    value: citiesOfTurkey.id,
  }));
  const jobPositionOption = generalJobPositions.map((generalJobPosition) => ({
    key: generalJobPosition.id,
    text: generalJobPosition.jobPositionName,
    value: generalJobPosition.id,
  }));

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div>
      <Card fluid>
        <Card.Content header="İş ilanı Ekle" />
        <Card.Content>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field style={{ marginBottom: "1rem" }}>
              <label>Genel İş Posisyonu</label>
              <Dropdown
                clearable
                item
                placeholder="Genel İş Posisyonu"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "jobPositionId")
                }
                onBlur={formik.onBlur}
                id="jobPositionId"
                value={formik.values.jobPositionId}
                options={jobPositionOption}
              />
              {formik.errors.jobPositionId && formik.touched.jobPositionId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.jobPositionId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <label>Şehir</label>
              <Dropdown
                clearable
                item
                placeholder="Şehir"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "cityId")
                }
                onBlur={formik.onBlur}
                id="cityId"
                value={formik.values.cityId}
                options={cityOption}
              />
              {formik.errors.cityId && formik.touched.cityId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.cityId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <label>Çalışma yeri</label>
              <Dropdown
                clearable
                item
                placeholder="Çalışma yeri"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "workPlaceId")
                }
                onBlur={formik.onBlur}
                id="workPlaceId"
                value={formik.values.workPlaceId}
                options={workPlaceOption}
              />
              {formik.errors.workPlaceId && formik.touched.workPlaceId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.workPlaceId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <label>Çalışma Şekli</label>
              <Dropdown
                clearable
                item
                placeholder="Çalışma Şekli"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "workTimeId")
                }
                onBlur={formik.onBlur}
                id="workTimeId"
                value={formik.values.workTimeId}
                options={workTimeOption}
              />
              {formik.errors.workTimeId && formik.touched.workTimeId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.workTimeId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Grid stackable>
                <Grid.Column width={8}>
                  <label style={{ fontWeight: "bold" }}>
                    Maaş aralığı Minimum
                  </label>
                  <Input
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Maaş aralığı Minimum"
                    value={formik.values.minSalary}
                    name="minSalary"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></Input>
                  {formik.errors.minSalary && formik.touched.minSalary && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.minSalary}
                    </div>
                  )}
                </Grid.Column>
                <Grid.Column width={8}>
                  <label style={{ fontWeight: "bold" }}>
                    Maaş aralığı Maksimum
                  </label>
                  <Input
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Maaş aralığı Maksimum"
                    value={formik.values.maxSalary}
                    name="maxSalary"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></Input>
                  {formik.errors.maxSalary && formik.touched.maxSalary && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.maxSalary}
                    </div>
                  )}
                </Grid.Column>
              </Grid>
            </Form.Field>

            <Form.Field>
              <Grid stackable>
                <Grid.Column width={8}>
                  <label style={{ fontWeight: "bold" }}>
                    Açık Posisyon sayısı
                  </label>
                  <Input
                    style={{ width: "100%" }}
                    id="openPositions"
                    name="openPositions"
                    error={Boolean(formik.errors.openPositions)}
                    onChange={formik.handleChange}
                    value={formik.values.openPositions}
                    onBlur={formik.handleBlur}
                    type="number"
                    placeholder="Açık Posisyon sayısı"
                  />
                  {formik.errors.openPositions &&
                    formik.touched.openPositions && (
                      <div className={"ui pointing red basic label"}>
                        {formik.errors.openPositions}
                      </div>
                    )}
                </Grid.Column>
                <Grid.Column width={8}>
                  <label style={{ fontWeight: "bold" }}>
                    Son başvuru tarihi
                  </label>
                  <Input
                    style={{ width: "100%" }}
                    type="date"
                    error={Boolean(formik.errors.lastDate)}
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "lastDate")
                    }
                    value={formik.values.lastDate}
                    onBlur={formik.handleBlur}
                    name="lastDate"
                    placeholder="Son başvuru tarihi"
                  />
                  {formik.errors.lastDate && formik.touched.lastDate && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.lastDate}
                    </div>
                  )}
                </Grid.Column>
              </Grid>
            </Form.Field>

            <Form.Field>
              <label>İş tanımı</label>
              <TextArea
                placeholder="İş tanımı"
                style={{ minHeight: 100 }}
                error={Boolean(formik.errors.description).toString()}
                value={formik.values.description}
                name="description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.description && formik.touched.description && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.description}
                </div>
              )}
            </Form.Field>
            <Button
              content="İş İlanı Ekle"
              labelPosition="right"
              icon="add"
              positive
              type="submit"
              style={{ marginLeft: "20px" }}
            />
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
}
