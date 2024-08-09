import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Architecture',
    Svg: require('@site/static/img/home/arch4.svg').default,
    description: (
      <>
        The OSED architecture provides a direct connection between centralized grid controllers (e.g., DERMS, Aggregators, VPPs) and distributed EDGE Coordinators. 
        These EDGE Coordinators aggregate users within specific grid areas. 
        Each user agent aggregates the assets in its respective building, making them available for the deployment of various grid functions as needed.
      </>
    ),
    link: '/docs/architecture'
  },
  {
    title: 'Building Intelligence',
    Svg: require('@site/static/img/home/bi3.svg').default,
    description: (
      <>
        The building intelligence comprises a collection of microservices that enable the deployment of grid functions in the user's building. 
        These microservices include forecasting, learning mechanisms, data processing, and specific control algorithms for each grid function. 
        Additionally, it handles the connections to the EDGE Coordinator, which listens to grid function calls, and the connection to building actuators, which read and write data on the devices. 
        The building intelligence manages these components to ensure seamless integration and operation of various grid functions within the building.
      </>
    ),
    link: 'docs/Building%20Intelligence/introduction'
  },
  {
    title: 'Building actuators',
    Svg: require('@site/static/img/home/ba3.svg').default,
    description: (
      <>
        The building actuators serve as the connection between the building intelligence and the physical assets of the building. 
        The actuators have two main purposes: to read sensor states and transfer the measurements to the building intelligence, 
        and to read the control actions generated by the building intelligence and apply them to the real devices in the building.
      </>
    ),
    link: 'docs/EDGE%20Actuators/introduction'
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <a href={link}>{title}</a>
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}