import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class Upgrade extends React.Component {
  render() {
    return (
        <>
          <div className="content">
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <Card className="card-upgrade">
                  <CardHeader className="text-center">
                    <CardTitle tag="h4">Stocked Investment Tool - Upgrade To Pro</CardTitle>
                    <p className="card-category">
                      More Graphs, More Data, More Information, More Money For You
                    </p>
                  </CardHeader>
                  <CardBody>
                    <Table responsive>
                      <thead>
                      <tr>
                        <th />
                        <th className="text-center">Free</th>
                        <th className="text-center">PRO</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>Individual Stock Graphs</td>
                        <td className="text-center">4</td>
                        <td className="text-center">Unlimited</td>
                      </tr>
                      <tr>
                        <td>Unlimited Stock Access</td>
                        <td className="text-center">
                          <i className="nc-icon nc-simple-remove text-danger" />
                        </td>
                        <td className="text-center">
                          <i className="nc-icon nc-check-2 text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Unlimited Data Frames
                        </td>
                        <td className="text-center">
                          <i className="nc-icon nc-simple-remove text-danger" />
                        </td>
                        <td className="text-center">
                          <i className="nc-icon nc-check-2 text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td>Personal Portal</td>
                        <td className="text-center">
                          <i className="nc-icon nc-simple-remove text-danger" />
                        </td>
                        <td className="text-center">
                          <i className="nc-icon nc-check-2 text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td>Premium Support</td>
                        <td className="text-center">
                          <i className="nc-icon nc-simple-remove text-danger" />
                        </td>
                        <td className="text-center">
                          <i className="nc-icon nc-check-2 text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td />
                        <td className="text-center">Free</td>
                        <td className="text-center">$1.99 / Month</td>
                      </tr>
                      <tr>
                        <td className="text-center" />
                        <td className="text-center">
                          <Button
                              className="btn-round disabled"
                              color="default"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                          >
                            Current Version
                          </Button>
                        </td>
                        <td className="text-center">
                          <Button
                              className="btn-round"
                              color="primary"
                              href=""
                              rel="noopener noreferrer"
                              target="_blank"
                          >
                            Upgrade to PRO
                          </Button>
                        </td>
                      </tr>
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </>
    );
  }
}

export default Upgrade;
