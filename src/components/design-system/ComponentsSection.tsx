import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { toast } from "sonner";
import { AlertCircle, ChevronDown, Copy, Info, Settings, Trash, User } from "lucide-react";

export function ComponentsSection() {
  const [progress] = useState(65);
  const [textareaCount, setTextareaCount] = useState(0);
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <section id="components" className="py-24 md:py-32 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">
          Komponenter
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
          UI-bibliotek
        </h2>
        <p className="text-muted-foreground text-lg mb-16 max-w-2xl leading-relaxed">
          Interaktiva exempel på alla komponenter i designsystemet.
        </p>

        {/* Buttons */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6">Knappar</h3>
          <div className="glass rounded-2xl p-8">
            <div className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>
        </div>

        {/* Cards & Forms */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6">Kort & formulär</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Exempelkort</CardTitle>
                <CardDescription>Ett kort med typisk layout och innehåll.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-post</Label>
                  <Input id="email" placeholder="namn@exempel.se" />
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm">Godkänn villkor</Label>
                </div>
                <Button className="w-full">Skicka</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Inställningar</CardTitle>
                <CardDescription>Hantera dina preferenser.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Notifikationer</Label>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Mörkt läge</Label>
                  <Switch />
                </div>
                <div className="space-y-2">
                  <Label>Framsteg</Label>
                  <Progress value={progress} />
                  <p className="text-xs text-muted-foreground">{progress}% klart</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Textarea */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6">Textarea</h3>
          <div className="glass rounded-2xl p-8 max-w-lg">
            <Label htmlFor="bio" className="mb-2 block">Beskrivning</Label>
            <Textarea
              id="bio"
              placeholder="Skriv en beskrivning..."
              maxLength={200}
              onChange={(e) => setTextareaCount(e.target.value.length)}
            />
            <p className="text-xs text-muted-foreground mt-2 text-right">{textareaCount}/200</p>
          </div>
        </div>

        {/* Select & Slider */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6">Select & slider</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-8">
              <Label className="mb-2 block">Välj region</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Välj en region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="stockholm">Stockholm</SelectItem>
                  <SelectItem value="goteborg">Göteborg</SelectItem>
                  <SelectItem value="malmo">Malmö</SelectItem>
                  <SelectItem value="uppsala">Uppsala</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="glass rounded-2xl p-8">
              <Label className="mb-4 block">Värde: {sliderValue[0]}</Label>
              <Slider
                value={sliderValue}
                onValueChange={setSliderValue}
                max={100}
                step={1}
              />
            </div>
          </div>
        </div>

        {/* Avatars */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6">Avatar</h3>
          <div className="glass rounded-2xl p-8 flex items-center gap-4">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://i.pravatar.cc/32?img=1" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://i.pravatar.cc/40?img=2" />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://i.pravatar.cc/48?img=3" />
              <AvatarFallback>CD</AvatarFallback>
            </Avatar>
            <Avatar className="h-14 w-14">
              <AvatarFallback className="text-lg">EF</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Tooltip, Dialog, Dropdown */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6">Överläggskomponenter</h3>
          <div className="glass rounded-2xl p-8 flex flex-wrap gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">Hovra mig</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Detta är en tooltip</p>
              </TooltipContent>
            </Tooltip>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">Öppna Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Bekräfta åtgärd</DialogTitle>
                  <DialogDescription>
                    Är du säker på att du vill fortsätta? Denna åtgärd kan inte ångras.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="outline">Avbryt</Button>
                  <Button>Bekräfta</Button>
                </div>
              </DialogContent>
            </Dialog>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Meny <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" /> Profil
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" /> Inställningar
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Copy className="mr-2 h-4 w-4" /> Kopiera
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  <Trash className="mr-2 h-4 w-4" /> Ta bort
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Alerts */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6">Alert</h3>
          <div className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>Detta är ett informationsmeddelande.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Fel</AlertTitle>
              <AlertDescription>Något gick fel. Försök igen senare.</AlertDescription>
            </Alert>
          </div>
        </div>

        {/* Skeleton */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6">Skeleton</h3>
          <div className="glass rounded-2xl p-8 flex items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-1/3" />
            </div>
          </div>
        </div>

        {/* Radio Group */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6">Radio group</h3>
          <div className="glass rounded-2xl p-8">
            <RadioGroup defaultValue="option-1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-1" id="r1" />
                <Label htmlFor="r1">Standardplan</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-2" id="r2" />
                <Label htmlFor="r2">Premiumplan</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-3" id="r3" />
                <Label htmlFor="r3">Enterprise</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* Separator */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6">Separator</h3>
          <div className="glass rounded-2xl p-8">
            <p className="text-sm">Innehåll ovan</p>
            <Separator className="my-4" />
            <p className="text-sm">Innehåll nedan</p>
            <div className="flex items-center gap-4 mt-4 h-6">
              <span className="text-sm">Vänster</span>
              <Separator orientation="vertical" />
              <span className="text-sm">Mitten</span>
              <Separator orientation="vertical" />
              <span className="text-sm">Höger</span>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6">Breadcrumb</h3>
          <div className="glass rounded-2xl p-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Hem</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Tjänster</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Revision</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Feedback */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6">Feedback</h3>
          <div className="glass rounded-2xl p-8">
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge>Standard</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
            <Button
              variant="outline"
              onClick={() => toast.success("Klart!", { description: "Åtgärden genomfördes." })}
            >
              Visa Toast
            </Button>
          </div>
        </div>

        {/* Navigation components */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Navigation</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-8">
              <Tabs defaultValue="tab1">
                <TabsList>
                  <TabsTrigger value="tab1">Översikt</TabsTrigger>
                  <TabsTrigger value="tab2">Detaljer</TabsTrigger>
                  <TabsTrigger value="tab3">Historik</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="mt-4 text-sm text-muted-foreground">
                  Översiktsinnehåll visas här.
                </TabsContent>
                <TabsContent value="tab2" className="mt-4 text-sm text-muted-foreground">
                  Detaljerad information visas här.
                </TabsContent>
                <TabsContent value="tab3" className="mt-4 text-sm text-muted-foreground">
                  Historisk data visas här.
                </TabsContent>
              </Tabs>
            </div>

            <div className="glass rounded-2xl p-8">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Vad är Vericount?</AccordionTrigger>
                  <AccordionContent>
                    Vericount levererar moderna lösningar inom revision och rådgivning.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Hur använder jag designsystemet?</AccordionTrigger>
                  <AccordionContent>
                    Importera komponenter och använd design tokens i din applikation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Var hittar jag kodexempel?</AccordionTrigger>
                  <AccordionContent>
                    Se sektionen Design Tokens för kopierbara kodblock.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
