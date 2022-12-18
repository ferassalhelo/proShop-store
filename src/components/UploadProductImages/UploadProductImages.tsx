import ImageUploading from "react-images-uploading";
import { Box, Grid, Typography } from "@mui/material";
import Img from "../Img/Img";
import img from "../../assets/imges/cloud-upload.svg";
import imgPlus from "../../assets/imges/png-clipart-computer-icons-plus-sign-plus-sign-rectangle-grey.png";
import Button from "../Button/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTranslation } from "react-i18next";
import { MainBox } from "./UploadProductimages.style";

const items = [1, 2, 3];
interface IProps {
  value: { data_url: string }[];
  handleImages: any;
}

export default function UploadProductImages(props: IProps) {
  const [t] = useTranslation();
  return (
    <ImageUploading
      multiple
      value={props.value}
      onChange={props.handleImages}
      maxNumber={4}
      dataURLKey="data_url"
      acceptType={["jpg", "svg", "png"]}
    >
      {({ onImageUpload, onImageRemoveAll, onImageRemove }) => (
        // write your building UI
        <Box textAlign="center">
          <Box mb="50px" position="relative">
            {props.value[0] ? (
              <>
                <Img src={props.value[0].data_url} />
                <Button
                  position="absolute"
                  minWidth="20px"
                  minHeight="20px"
                  width="25px"
                  height="25px"
                  borderRadius="50%"
                  bottom="-7px"
                  right="-7px"
                  padding="5px"
                  backgroundColor="background.paper"
                  onClick={() => onImageRemove(0)}
                >
                  <DeleteIcon fontSize="small" />
                </Button>
              </>
            ) : (
              <MainBox onClick={onImageUpload}>
                <Img src={img} />
                <Typography variant="h5" color="text.secondary">
                  {t("productImages")}
                  <Typography fontSize="13px">
                    ( {t("ImagesAllowed4")})
                  </Typography>
                </Typography>
              </MainBox>
            )}
          </Box>
          <Grid container gap="20px" wrap="nowrap" alignItems="center">
            {items.map((item) => (
              <Grid item xs={4} key={item}>
                {props.value[item] ? (
                  <Box position="relative">
                    <Img src={props.value[item].data_url} />
                    <Button
                      position="absolute"
                      minWidth="20px"
                      minHeight="20px"
                      width="25px"
                      height="25px"
                      borderRadius="50%"
                      bottom="-7px"
                      right="-7px"
                      padding="5px"
                      backgroundColor="background.paper"
                      onClick={() => onImageRemove(item)}
                    >
                      <DeleteIcon fontSize="small" />
                    </Button>
                  </Box>
                ) : (
                  <MainBox onClick={onImageUpload}>
                    <Img src={imgPlus} />
                  </MainBox>
                )}
              </Grid>
            ))}
          </Grid>
          {props.value[0] ? (
            <Button
              backgroundColor="background.paper"
              maxWidth="200px"
              margin="30px 0"
              fontSize="15px"
              onClick={onImageRemoveAll}
            >
              {t("removeAllImages")}
            </Button>
          ) : null}
        </Box>
      )}
    </ImageUploading>
  );
}
