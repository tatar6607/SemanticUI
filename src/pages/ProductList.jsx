import React from "react";
// import { Table, Header, Rating } from "semantic-ui-react";
import { Table, Image, Menu, Icon, Button } from "semantic-ui-react";
import useFetch from "../services/useFecth";
import LocalData2 from "../services/data";

const ProductList = () => {
  const { data, sil } = useFetch("https://api.github.com/users");
  // console.log(`Api length =  ${data.length}`);
  // console.log(`Local Data length =  ${LocalData2.length}`);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Avatar</Table.HeaderCell>
            <Table.HeaderCell>Username</Table.HeaderCell>
            <Table.HeaderCell>Url</Table.HeaderCell>
            <Table.HeaderCell>Sepete Ekle / Sil</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((user, index) => {
            // let puan =
            //   index < LocalData2.length - 1
            //     ? LocalData2[index].puan
            //     : "index bitti";
            const { puan, id2, dusunceler } = LocalData2[index];
            const { avatar_url, login, url, id } = user;
            return (
              <Table.Row key={id}>
                <Table.Cell>
                  <Image src={avatar_url} size="tiny" circular />
                </Table.Cell>
                <Table.Cell>
                  {login} - {puan} - {id2} - {dusunceler}
                </Table.Cell>
                <Table.Cell>{url}</Table.Cell>
                <Table.Cell>
                  <SilEkle onClick={() => sil(index)} />
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
};

const SilEkle = (props) => {
  const { onClick } = props;
  return (
    <div>
      <Button animated="vertical" color="linkedin" style={{ width: "80px" }}>
        <Button.Content hidden>Takip et</Button.Content>
        <Button.Content visible>
          <Icon name="user plus" />
        </Button.Content>
      </Button>
      <Button animated="vertical" color="youtube" onClick={onClick}>
        <Button.Content visible>
          <Icon name="user delete" />
        </Button.Content>
        <Button.Content hidden>Sil</Button.Content>
      </Button>
    </div>
  );
};
export default ProductList;
