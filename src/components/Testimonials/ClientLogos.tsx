import React from 'react';
import { Card } from "@/components/ui/card";

interface Client {
  name: string;
  logo: string;
}

interface ClientLogosProps {
  clients: Client[];
}

export function ClientLogos({ clients }: ClientLogosProps) {
  return (
    <div className="space-y-8">
      <h4 className="text-center text-lg font-medium text-muted-foreground">
        Vertrouwd door toonaangevende bedrijven
      </h4>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {clients.map((client) => (
          <Card 
            key={client.name} 
            className="p-6 flex items-center justify-center bg-muted/50 hover:bg-muted transition-colors duration-300"
          >
            <img 
              src={client.logo} 
              alt={client.name}
              className="h-6 w-auto grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </Card>
        ))}
      </div>
    </div>
  );
}