import React from "react";
import { ButtonGroup, Card, Col, Dropdown, DropdownButton, Row } from "react-bootstrap";

const FootToolbar = (props) => {
  const openChangeCategory = () => {};
  return (
    <footer>
      <Card className="Footer">
        <Card.Title>
          <Row>
            <Col xs={8} className="toolbar-col">
              <Row className="nested-row">
                <Col xs={8} className="nested-col-1">
                  Showing for{" "}
                  <span className="current-category">
                    {props.currentCategory}
                  </span>
                </Col>
                <Col
                  xs={4}
                  className="nested-col-2"
                  onClick={openChangeCategory}
                >
                  <DropdownButton
                    as={ButtonGroup}
                    id="dropdown-button-drop-up"
                    drop='up'
                    variant="secondary"
                    title='change'
                  >
                    {props.categories
                        .filter(cat=>cat.category_name!==props.currentCategory)
                        .map(cat=>(
                            <Dropdown.Item key={cat.category_id} onClick={()=>props.changeCategory(cat.category_id)}>{cat.category_name}</Dropdown.Item>
                        ))
                    }
                  </DropdownButton>
                </Col>
              </Row>
            </Col>
            <Col xs={4} className="toolbar-col">
              <div onClick={props.viewMorePress} className='view-more'>
                {props.viewMoreVal ? "[-] View Less" : "[+] View More"}
              </div>
            </Col>
          </Row>
        </Card.Title>
      </Card>
    </footer>
  );
};

export default FootToolbar;
