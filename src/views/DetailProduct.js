import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../components/DataDummy";
import { API } from "../config/api";
import { useMutation, useQuery } from "react-query";
import { UserContext } from "../helpers";
import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faMapLocationDot,
  faPeopleCarryBox,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";
// import { format } from "date-fns";

function DetailProduct() {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  const [join, setJoin] = useState([])
  const [joins, setJoins] = useState([])
  const params = useParams();
  const id = parseInt(params.id);
  let { data: detail } = useQuery("detailCache", async () => {
    const response = await API.get("/campaign/" + id);
    return response.data.data.data;
  });
  let { data: totalUser } = useQuery("userCampaign", async () => {
    const response = await API.get("/user-campaign/" + id);
    setJoin(response.data.data.userCampaign)
    return response.data.data.userCampaign;
  });
  let joinUser = () => (totalUser?.map((item) =>{
    let result = false
    if(item.user_id === state.user.id && item.campaign_id === id ){
      result = true
    }
    return result;
  }))

  let finalJoin= () => {join?.map((item, index) =>{
    if (item.campaign_id === id) {
      setJoins(item.campaign_id);
    }
  })}

  // let date = detail?.date;

  // let formattedDate = () => {
  //   let newDate = new Date(date);
  //   // console.log(newDate);
  //   let formats = format(newDate, "PPPP");
  //   return formats;
  // };
  useEffect(() => {
    joinUser();
    finalJoin()
  }, [id]);

  const handleJoin = useMutation(async (e) => {
    try {
      e.preventDefault();
      if (state.isLogin) {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
  
        const body = JSON.stringify({ user_id: state.user.id, campaign_id: id });
        const response = await API.post(`/campaign/${id}`, body, config);
  
        navigate("/profile");
      } else {
        navigate("/login")
        const alert = toast.error("Please login to join campaign!");
      }
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <Container className="w-80">
        <h2 className="text-primary text-center">{detail?.name}</h2>
        <p className="text-center">
          {totalUser?.map((item, index) => {
            if (item?.campaign_id === id && item.length != 0) {
              if (index === 0 ) {
                return (item.user.full_name+" dan " + (totalUser?.length - 1 !== 0 ? totalUser?.length - 1 : null) + " teman lain sudah bergabung pada temu bersih ini"
                );
              } else if(index.length <= 1){
                return (item.user.full_name+" sudah bergabung pada temu bersih ini")
              }
            }else if(index === 0) {
              return "Ayo bergabung, kamu adalah yang pertama!";
            }
          })}
        </p>
        <div className="d-flex flex-column">
          <Image
            style={{ height: 500, width: null }}
            src={detail?.image_url}
            alt=""
            className=""
          />
        </div>
        <Row>
          <h2 className="mt-4">Target</h2>
          <Col lg="5">
            <p>
              <FontAwesomeIcon
                style={{ marginRight: 16, color: "#22c55e" }}
                icon={faMapLocationDot}
              />
              {detail?.location_name}
            </p>
            <p>
              <FontAwesomeIcon
                style={{ marginRight: 16, color: "#22c55e" }}
                icon={faTrash}
              />{" "}
              {detail?.target}kg Sampah Terkumpul
            </p>
          </Col>
          <Col lg="7">
            <p>
              <FontAwesomeIcon
                style={{ marginRight: 16, color: "#22c55e" }}
                icon={faPeopleCarryBox}
              />
              {detail?.person} Orang minimal dibutuhkan{" "}
              <strong>({join.length} sudah bergabung)</strong>{" "}
            </p>
            <p>
              <FontAwesomeIcon
                style={{ marginRight: 16, color: "#22c55e" }}
                icon={faCalendar}
              />{" "}
              {detail?.date}
              <FontAwesomeIcon
                style={{ marginRight: 16, marginLeft: 32, color: "#22c55e" }}
                icon={faClock}
              />{" "}
              {detail?.start_hour} wib - {detail?.end_hour} wib
            </p>
          </Col>
          <h2 className="text-primary mt-4">Tentang Project</h2>
          <p>{detail?.description}</p>
        </Row>
        <Row className="d-flex justify-content-end">
          <Col md={3}>
            {totalUser?.map((item, index) => {
              if (index === 0 && joinUser()[1]) {
                return (
                  <Button disabled className="w-100">Sudah Bergabung</Button>
                )
              } else if(index === 0) {
                return (<Button onClick={(e)=>handleJoin.mutate(e)} className="w-100">Bergabung</Button>)
              }
            })}
            <p style={{ fontSize: 12, textAlign:"center" }}>
               {totalUser?.length - 1 <=0 ? "" : ("Bersama " +(totalUser?.length - 1) +" teman lain")}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DetailProduct;
