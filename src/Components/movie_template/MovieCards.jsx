import React, { useEffect, useState } from "react";
import "./MovieCards.css";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";
import useMediaQuery from '@mui/material/useMediaQuery';
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      // hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {/* {value === index && (
        
      )} */}
      <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
      </Box>
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function MovieCards({ movies, handlesearch ,setMovies}) {
  const [age, setAge] = useState("");
  const [value, setValue] = useState(0);
  const [genre, setGenre] = useState("all");
  // const [movies, setMovies] = useState(moviesDataata);
  const [sort, setSort] = useState("newest");
  const isMobile = useMediaQuery('(max-width:1024px)');
  const tabs = [
    { tab: "ALL", genre: "all" },
    { tab: "DOCUMENTRY", genre: "documentry" },
    { tab: "COMEDY", genre: "comedy" },
    { tab: "HORROR", genre: "horror" },
    { tab: "CRIME", genre: "crime" },
  ];
  useEffect(() => {
    setMovies([...movies]);
  }, [movies, genre]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // useEffect(() => {
  //   setMovies(moviesDataata);
  // }, [genre]);

  const handleChangeselect = (event) => {
    setAge(event.target.value);
  };

  const onSort = (e) => {
    setSort(e.target.value);
  };

  let newMovies = movies.filter((m) => m.genre === genre);
  if (genre === "all") {
    newMovies = movies;
  }

  newMovies = newMovies.sort((a, b) =>
    sort === "oldest" ? a.year - b.year : b.year - a.year
  );

  return (
    <>
      <Box className="movie-card mt-3" sx={{ background: "#79737333" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12  ">
              <Box sx={{ width: "100%", padding: "20px", paddingTop: "0px" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant={isMobile ? 'scrollable' : 'standard'}
                    scrollButtons={isMobile ? 'auto' : false}
                    aria-label="visible arrows tabs example"
                    sx={{
                      [`& .${tabsClasses.scrollButtons}`]: {
                        '&.Mui-disabled': { opacity: 0.3 },
                      },
                    }}
                  >
                    {tabs.map((t, i) => (
                      <Tab
                        onClick={() => {
                          setGenre(t.genre);
                          handlesearch("");
                        }}
                        label={t.tab}
                        {...a11yProps(0)}
                        sx={{ borderColor: "divider", color: "white" }}
                      />
                    ))}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                        width: "100%",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "10px",
                        }}
                      >
                        <Typography sx={{ fontSize: "14px", color: "white" }}>
                          SORT BY
                        </Typography>
                        <FormControl
                          variant="standard"
                          sx={{ m: 1, minWidth: 138, paddingBottom: 2 }}
                        >
                          <InputLabel id="demo-simple-select-standard-label">
                            RELEASE DATE
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={age}
                            onChange={(e) => {
                              handleChangeselect(e);
                              onSort(e);
                            }}
                            label="Age"
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {/* {dates.map((item, i) => (
                            <MenuItem key={i} value={item}>
                              {item}
                            </MenuItem>
                          ))} */}
                            <MenuItem value="newest">Newest</MenuItem>
                            <MenuItem value="oldest">Oldest</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Box>
                  </Tabs>
                </Box>
                <Typography sx={{ color: "white", py: 2 }}>
                  {newMovies.length} movies found
                </Typography>
                <CustomTabPanel value={value}>
                  <Grid container spacing={3}>
                    {newMovies.map((item, i) => {
                      return (
                        <Grid lg={3}>
                          <Card
                            key={i}
                            sx={{ position: "relative" }}
                            className="card"
                          >
                            {/* <Box sx={{width: "242px",height: "380px"}}> */}
                            <div className="overlay">
                              <h5>{item.title}</h5>
                              <p>{item.year}</p>
                            </div>
                            <CardMedia
                              sx={{ width: 245, height: 380 }}
                              image={item.src}
                              title="movie pics"
                            />
                            {/* </Box> */}
                          </Card>
                        </Grid>
                      );
                    })}
                  </Grid>
                </CustomTabPanel>
              </Box>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}
export default MovieCards;
