import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, FileQuestion, TrendingUp, Users, DollarSign } from "lucide-react";

export function PatternsSection() {
  return (
    <section id="patterns" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">
          Mönster
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
          Layoutmönster
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl leading-relaxed">
          Återanvändbara mönster och rekommenderade layouter för vanliga scenarier i gränssnittet.
        </p>

        {/* Formulärmönster */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6">Formulärlayout</h3>
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Logga in</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="pattern-email">E-post</Label>
                  <Input id="pattern-email" type="email" placeholder="namn@exempel.se" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pattern-pw">Lösenord</Label>
                  <Input id="pattern-pw" type="password" placeholder="••••••••" />
                </div>
                <Button className="w-full">Logga in</Button>
                <p className="text-center text-sm text-muted-foreground">
                  Har du inget konto?{" "}
                  <span className="text-primary cursor-pointer hover:underline">Skapa konto</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistikkort */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6">Statistikkort</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Users, label: "Kunder", value: "1 284", trend: "+12 %" },
              { icon: DollarSign, label: "Intäkter", value: "4,2 mkr", trend: "+8 %" },
              { icon: TrendingUp, label: "Tillväxt", value: "24 %", trend: "+3 %" },
            ].map((stat) => (
              <Card key={stat.label}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                    <stat.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-primary mt-1">{stat.trend} sedan förra månaden</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tomt tillstånd */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6">Tomt tillstånd</h3>
          <div className="glass rounded-2xl p-12 text-center">
            <FileQuestion className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">Inga resultat hittades</h4>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm mx-auto">
              Vi kunde inte hitta det du letade efter. Prova att ändra dina sökfilter.
            </p>
            <Button variant="outline">Rensa filter</Button>
          </div>
        </div>

        {/* Laddningstillstånd */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6">Laddningstillstånd</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-1/2" />
                  </div>
                </div>
                <Skeleton className="h-20 w-full" />
                <div className="flex gap-2">
                  <Skeleton className="h-8 w-20" />
                  <Skeleton className="h-8 w-20" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 space-y-3">
                <Skeleton className="h-6 w-1/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-32 w-full rounded-lg" />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Feltillstånd */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Feltillstånd</h3>
          <div className="glass rounded-2xl p-8 border-destructive/30 border">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
              <div>
                <h4 className="font-semibold text-destructive mb-1">Något gick fel</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Kunde inte hämta data. Kontrollera din anslutning och försök igen.
                </p>
                <Button variant="outline" size="sm">Försök igen</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
