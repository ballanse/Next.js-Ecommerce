import React from 'react';
import { Grid, Thumbnail, Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Clearfix } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

export default class GridProduto extends React.Component {

  render() {
      const rows = this.props.produtos.reduce((prev, item, i) => {
        const where = Math.floor(i / 3);
        const isNew = i === 0 || i % 3 === 0;
        if (isNew) {
          prev.push([item]);
        } else {
          prev[where].push(item);
        }
        return prev;
      }, []);



      return (
        <div>
        <Grid bsClass='GridProduto'>
          {
            rows.map((row) => <Row className="show-grid">
              {
                row.map((produto) => <Col sm={0} md={4}>
                    <Thumbnail src={produto.img[0]} alt={produto.name}>
                      <h3>{produto.name}</h3>
                      <p>{produto.description}</p>
                      <p>
                        <Button bsStyle="primary">Adicionar ao carrinho</Button>&nbsp;
                        <Button bsStyle="default">Detalhes</Button>
                      </p>
                    </Thumbnail>
                </Col>)
              }
            </Row>)
          }
        </Grid>
        </div>
      );
  }
}
