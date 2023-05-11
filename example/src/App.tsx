import { Chart as ChartJS, registerables } from 'chart.js';
import React, { useState } from 'react';
import {
  Alert,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from 'react-bootstrap';
import { Line, Radar } from 'react-chartjs-2';
import {
  AnalysisModel,
  CategoricalViewer,
  HistoricalViewer,
  StarsViewer,
} from 'review-master';
import './App.css';
import sampleData from './data/analysisResponse.json';

ChartJS.register(...registerables);

const App = () => {
  const [inputJson, setInputJson] = useState('');
  const [invalidJson, setInvalidJson] = useState(false);
  const analysisModel = new AnalysisModel(inputJson || sampleData);
  const historicalViewer = new HistoricalViewer(analysisModel, 'day');
  const categoricalViewer = new CategoricalViewer(analysisModel);
  const starsViewer = new StarsViewer(analysisModel);

  const { options: historicalOptions, data: historicalData } =
    historicalViewer.getOptionsAndData();
  const { options: categoricalOptions, data: categoricalData } =
    categoricalViewer.getOptionsAndData();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const json = JSON.parse(event.target.value);
      setInputJson(json);
      setInvalidJson(false);
    } catch (error) {
      setInvalidJson(true);
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1>Review Analysis Visualization</h1>
          <Form.Group>
            <Form.Label>Paste your JSON data:</Form.Label>
            <FormControl
              as="textarea"
              rows={6}
              value={inputJson ? JSON.stringify(inputJson) : ''}
              onChange={handleInputChange}
              placeholder="Paste your JSON data here, or leave empty to use sample data..."
            />
          </Form.Group>
          {invalidJson && (
            <Alert variant="danger">
              Invalid JSON data! Please validate your JSON at{' '}
              <Alert.Link href="https://jsonformatter.curiousconcept.com/">
                https://jsonformatter.curiousconcept.com/
              </Alert.Link>{' '}
              and try again.
            </Alert>
          )}
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="mx-auto" md={9}>
          <Card className="shadow p-3">
            <Card.Title className="text-center">
              <h5>Historical View</h5>
            </Card.Title>
            <Card.Body>
              <Line options={historicalOptions} data={historicalData} />
            </Card.Body>
          </Card>
        </Col>
        <Col className="mx-auto" md={3}>
          <Card className="shadow p-3">
            <Card.Title className="text-center">
              <h5>Statistical Analysis of Star Ratings</h5>
            </Card.Title>
            <Card.Body
              className="text-center"
              style={{ maxWidth: '100%', margin: '0 auto' }}
            >
              {starsViewer.createTable()}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="mx-auto" md={8}>
          <Card className="shadow p-3">
            <Card.Title className="text-center">
              <h5>Categorical View</h5>
            </Card.Title>
            <Card.Body>
              <Radar
                height={500}
                options={categoricalOptions}
                data={categoricalData}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
