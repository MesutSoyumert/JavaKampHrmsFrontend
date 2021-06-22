import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Dropdown, Input, TextArea, Card, Form, Grid } from "semantic-ui-react";
import CitiesOfTurkeyService from "../services/citiesOfTurkeyService";
import GeneralJobPositionService from "../services/generalJobPositionService";
import JobAdvertisementWorkingTypeService from "../services/jobAdvertisementWorkingTypeService";
import JobAdvertisementJobPositionPlaceService from "../services/jobAdvertisementJobPositionPlaceService";
import JobAdvertisementService from "../services/jobAdvertisementService";
import { useHistory } from "react-router-dom";

export default function JobAdvertisementCreate() {
  let jobAdvertisementService = new JobAdvertisementService();
  const JobAdvertAddSchema = Yup.object().shape({
    lastDate: Yup.date().nullable().required("Bu alanın doldurulması zorunludur"),
    description: Yup.string().required("Bu alanın doldurulması zorunludur"),
    jobPositionId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    workTimeId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    workPlaceId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    openPositions: Yup.string().required("Posizyon sayısı zorunludur").min(1,"Posizyon sayısı 1 den küçük olamaz"),
    cityId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    minSalary: Yup.number().min(0,"0 Dan az olamaz").required("Bu alan zorunludur"),
    maxSalary: Yup.number().min(0,"0 Dan az olamaz").required("Bu alan zorunludur")
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
      jobAdvertisementService.addJobAdvertisement(values).then((result) => console.log(result.data.data));
      alert("İş ilanı eklendi, Sistem Çalışanı onayının ardından listelemelerde görüntülenebilecektir");
      history.push("/jobadvertisements");
    },
  });

  const [jobAdvertisementWorkingTypes, setJobAdvertisementWorkingTypeServices] = useState([]);
  const [jobAdvertisementJobPositionPlaces, setJobAdvertisementJobPositionPlaces] = useState([]);
  const [citiesOfTurkeys, setCitiesOfTurkeys] = useState([]);
  const [generalJobPositions, setGeneralJobPositions] = useState([]);

  useEffect(() => {
    let jobAdvertisementWorkingTypeService = new JobAdvertisementWorkingTypeService();
    let jobAdvertisementJobPositionPlaceService = new JobAdvertisementJobPositionPlaceService();
    let citiesOfTurkeyService = new CitiesOfTurkeyService();
    let generalJobPositionService = new GeneralJobPositionService();

    jobAdvertisementWorkingTypeService.getJobAdvertisementWorkingTypes().then((result) => setJobAdvertisementWorkingTypeServices(result.data.data));
    jobAdvertisementJobPositionPlaceService.getJobAdvertisementJobPositionPlaces().then((result) => setJobAdvertisementJobPositionPlaces(result.data.data));
    citiesOfTurkeyService.getCitiesOfTurkey().then((result) => setCitiesOfTurkeys(result.data.data));
    generalJobPositionService.getGeneralJobPositions().then((result) => setGeneralJobPositions(result.data.data));
  }, []);

  const workTimeOption = jobAdvertisementWorkingTypes.map((jobAdvertisementWorkingType, index) => ({
    key: index,
    text: jobAdvertisementWorkingType.jobPositionWorkingType,
    value: jobAdvertisementWorkingType.id,
  }));
  // const workPlaceOption = jobAdvertisementJobPositionPlaces.map((jobAdvertisementJobPositionPlace, index) => ({
  //   key: index,
  //   text: jobAdvertisementJobPositionPlace.jobPositionPlace,
  //   value: jobAdvertisementJobPositionPlace.id,
  // }));

  const workPlaceOption = jobAdvertisementJobPositionPlaces.map((jobAdvertisementJobPositionPlace, index) => ({
    key: index,
    text: jobAdvertisementJobPositionPlace.jobPositionPlace,
    value: jobAdvertisementJobPositionPlace.id,
  }));

  const cityOption = citiesOfTurkeys.map((citiesOfTurkey, index) => ({
    key: index,
    text: citiesOfTurkey.citiesOfTurkeyName,
    value: citiesOfTurkey.id,
  }));
  const jobPositionOption = generalJobPositions.map((generalJobPosition, index) => ({
    key: index,
    text: generalJobPosition.jobPositionName,
    value: generalJobPosition.id,
  }));

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  }

  return (
    <div>
      <Card fluid>
      <Card.Content header='İş ilanı Ekle' />
      <Card.Content>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Field style={{marginBottom: "1rem"}}>
          <label>İş Posisyonu</label>
        <Dropdown
          clearable
          item
          placeholder="İş pozisyonu"
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
          {formik.errors.jobPositionId && formik.touched.jobPositionId &&(
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
          <label>Çalışma Süresi</label>
                <Dropdown
                  clearable
                  item
                  placeholder="Çalışma Süresi"
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
                  <div className={"ui pointing red basic label"}>{formik.errors.workTimeId}</div>
                )}
              </Form.Field>
              <Form.Field>
              <Grid stackable>
              <Grid.Column width={8}>
              <label style={{fontWeight: "bold"}}>Maaş aralığı MİNİMUM</label>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Maaş aralığı MİNİMUM"
                  value={formik.values.minSalary}
                  name="minSalary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
                {formik.errors.minSalary && formik.touched.minSalary && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.minSalary}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <label style={{fontWeight: "bold"}}>Maaş aralığı MAKSİMUM</label>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Maaş aralığı MAKSİMUM"
                  value={formik.values.maxSalary}
                  name="maxSalary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
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
              <label style={{fontWeight: "bold"}}>Açık Posisyon sayısı</label>
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
                {formik.errors.openPositions && formik.touched.openPositions && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.openPositions}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <label style={{fontWeight: "bold"}}>Son başvuru tarihi</label>
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
              <label>Açıklama</label>
                <TextArea
                  placeholder="Açıklama"
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
                content="Ekle"
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