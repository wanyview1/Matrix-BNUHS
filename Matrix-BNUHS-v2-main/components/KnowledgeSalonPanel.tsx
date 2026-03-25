// KnowledgeSalonPanel - Placeholder (type issues to fix)
// This is a temporary placeholder to allow build

import React from 'react';

interface Scenario {
  id: string;
  name: string;
  participants: any[];
  capsuleFusion: any;
}

interface Props {
  scenarios: Scenario[];
  onScenarioSelect: (s: Scenario) => void;
}

const KnowledgeSalonPanel: React.FC<Props> = ({ scenarios, onScenarioSelect }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Knowledge Salon</h2>
      <p>Scenarios: {scenarios.length}</p>
      <ul>
        {scenarios.map(s => (
          <li key={s.id} onClick={() => onScenarioSelect(s)} className="cursor-pointer p-2 hover:bg-gray-100">
            {s.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KnowledgeSalonPanel;
export { getAllScenarios } from './KnowledgeSalonScenarios';
