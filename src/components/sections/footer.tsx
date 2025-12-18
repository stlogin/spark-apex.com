export default function Footer() {
  return (
    <footer className="border-t py-6 md:px-8 md:py-0">
      <div className="container flex items-center justify-center md:h-24">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Spark Apex. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
