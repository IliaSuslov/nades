import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { LineUps } from './LineUps';

export function NadesWithFilters({ map }: { map: string }) {
  return (
    <Tabs defaultValue="t">
      <TabsList>
        <TabsTrigger value="t">T</TabsTrigger>
        <TabsTrigger value="ct">CT</TabsTrigger>
      </TabsList>
      <TabsContent value="ct">
        <Tabs defaultValue="smoke">
          <TabsList>
            <TabsTrigger value="smoke">Smoke</TabsTrigger>
            <TabsTrigger value="he">HE</TabsTrigger>
            <TabsTrigger value="fire">Fire</TabsTrigger>
            <TabsTrigger value="flash">Flash</TabsTrigger>
            <TabsTrigger value="combo">Combo</TabsTrigger>
            <TabsTrigger value="прострел">Прострел</TabsTrigger>
          </TabsList>
          <TabsContent value="smoke">
            <LineUps map={map as string} nade={'smoke'} side={'ct'} />
          </TabsContent>
          <TabsContent value="he">
            <LineUps map={map as string} nade={'he'} side={'ct'} />
          </TabsContent>
          <TabsContent value="fire">
            <LineUps map={map as string} nade={'fire'} side={'ct'} />
          </TabsContent>
          <TabsContent value="flash">
            <LineUps map={map as string} nade={'flash'} side={'ct'} />
          </TabsContent>
          <TabsContent value="combo">
            <LineUps map={map as string} nade={'combo'} side={'ct'} />
          </TabsContent>
          <TabsContent value="прострел">
            <LineUps map={map as string} nade={'прострел'} side={'ct'} />
          </TabsContent>
        </Tabs>
      </TabsContent>
      <TabsContent value="t">
        <Tabs defaultValue="smoke">
          <TabsList>
            <TabsTrigger value="smoke">Smoke</TabsTrigger>
            <TabsTrigger value="he">HE</TabsTrigger>
            <TabsTrigger value="fire">Fire</TabsTrigger>
            <TabsTrigger value="flash">Flash</TabsTrigger>
            <TabsTrigger value="combo">Combo</TabsTrigger>
            <TabsTrigger value="прострел">Прострел</TabsTrigger>
          </TabsList>
          <TabsContent value="smoke">
            <LineUps map={map as string} nade={'smoke'} side={'t'} />
          </TabsContent>
          <TabsContent value="he">
            <LineUps map={map as string} nade={'he'} side={'t'} />
          </TabsContent>
          <TabsContent value="fire">
            <LineUps map={map as string} nade={'fire'} side={'t'} />
          </TabsContent>
          <TabsContent value="flash">
            <LineUps map={map as string} nade={'flash'} side={'t'} />
          </TabsContent>
          <TabsContent value="combo">
            <LineUps map={map as string} nade={'combo'} side={'t'} />
          </TabsContent>
          <TabsContent value="прострел">
            <LineUps map={map as string} nade={'прострел'} side={'t'} />
          </TabsContent>
        </Tabs>
      </TabsContent>
    </Tabs>
  );
}
