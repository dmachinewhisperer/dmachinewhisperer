// Import all project components here
// import ECommerceApp from './ECommerceApp';
// import TaskManager from './TaskManager';
// import WeatherDashboard from './WeatherDashboard';
// import ChatApplication from './ChatApplication';

import DataEngine from './DataEngine';
import TradeCompliance from './TradeCompliance';
import uCoreOS from './uCoreOS'
import YOLO11Cam from './YOLO11Cam';
import CtcController from './CtcController';
import EnergyUsageProfiler from './EnergyUsageProfiler';
import AutomatedEcgProcessing from './EcgProcessing';
import WirelessLocalization from './WirelessLocalization';
import WorkshopDigitalTwin from './WorkshopDigitalTwin';
import MicroPrompts from './MicroPrompts';
import InternedStrings from './InternedStrings';
import JAMBAgent from './EDU.ai';
import GeoGenerator from './GeoGenerator';
import RFMTool from './RFMTool';
import SmartBPM from './SSPHY';
import HealthMetrics from './HealthMetrics';
import TalkingPapers from './TalkingPapers';
import dubStack from './dubstack';
import NGScout from './NGScout';
// Export all projects in a single object
// This makes it easy to add new projects - just import above and add to this object
export const projects = {
  'data-engine': DataEngine,
  'trade-compliance': TradeCompliance,

  'ucore-os': uCoreOS,
  'ng-scout': NGScout,
  'talking-papers': TalkingPapers,
  //'geo-generator': GeoGenerator,
  'jamb-ai-agent': JAMBAgent,
  'yolo-v11-camera': YOLO11Cam,
  'ctc-controller': CtcController,
  'dub-stack': dubStack,

  'energy-usage-profiler': EnergyUsageProfiler,
  'workshop-digital-twin': WorkshopDigitalTwin,
  'rfm-analysis-tool': RFMTool,

  'automated-ecg-processing': AutomatedEcgProcessing,
  //'health-metrics': HealthMetrics,
  'wireless-localization': WirelessLocalization,

  'smart-bp-component': SmartBPM,
  
  'micro-prompts': MicroPrompts,
  'interned-strings': InternedStrings,
  // 'ecommerce-app': ECommerceApp,
  // 'task-manager': TaskManager,
  // 'weather-dashboard': WeatherDashboard,
  // 'chat-application': ChatApplication,
};

// To add a new project:
// 1. Create a new component file in this folder
// 2. Import it above
// 3. Add it to the projects object with a unique key
// 4. Your project will automatically appear in the sidebar!