import React from "react";
import { Container, Form, FormGroup, Label, Input, Button, FormText } from "reactstrap";


function Inputdata() {
    return (
      <div className='Input'>
        <Container>
          <Form>
            <FormGroup >
              <Label for="kode barang" hidden>
                Id
              </Label>
              <Input
                id="kode barang"
                name="id"
                placeholder="Tolong diisi ID barang sesui dengan kodenya....."
                type="id"
              />
            </FormGroup>{" "}
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input id="exampleFile" name="file" type="file" />
              <FormText>Tolong masukan file dengan format JPEG dan JPG......</FormText>
            </FormGroup>{" "}
            <FormGroup>
              <Label for="name" hidden>
                Nama
              </Label>
              <Input
                id="name"
                name="nama"
                placeholder="isi nama barang!!!!!!"
                type="name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Provinsi" hidden>
                Provinsi
              </Label>
              <Input
                id="Provinsi"
                name="Provinsi"
                placeholder="isi alamat provinsi barang....."
                type="Provinsi"
              />
            </FormGroup>{" "}
            <FormGroup>
              <Label for="exampleUrl">Url</Label>
              <Input
                id="exampleUrl"
                name="url"
                placeholder="url placeholder"
                type="url"
              />
            </FormGroup>{" "}
            <FormGroup>
              <Label for="Text">Deskripsi</Label>
              <Input id="Text" name="text" type="textarea" />
            </FormGroup>{" "}
            <Button>Submit</Button>
          </Form>
        </Container>
      </div>
    );
}

export default Inputdata
