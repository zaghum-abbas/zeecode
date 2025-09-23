import React, { useState, useEffect } from "react";
import { Dialog, DialogContent } from "./dialog";
import { Button } from "./button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title?: string;
}

interface GalleryProps {
  items: GalleryItem[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export const Gallery: React.FC<GalleryProps> = ({
  items,
  isOpen,
  onClose,
  initialIndex,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          goToPrevious();
          break;
        case "ArrowRight":
          event.preventDefault();
          goToNext();
          break;
        case "Escape":
          event.preventDefault();
          onClose();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const currentItem = items[currentIndex];

  if (!isOpen || !currentItem) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-[95vw] max-h-[100vh] p-0 bg-background/95 backdrop-blur-md border-border/50 overflow-hidden">
        <div className="relative w-full h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border/50">
            <div>
              <h3 className="text-lg font-semibold">{currentItem.title}</h3>
              <p className="text-sm text-muted-foreground">
                {currentIndex + 1} of {items.length}
              </p>
            </div>
          </div>
          {/* Main Image */}
          <div className="flex-1 relative flex items-center justify-center p-4 overflow-auto min-h-0">
            <img
              src={currentItem.src}
              alt={currentItem.alt}
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-elegant"
              loading="lazy"
            />

            {/* Navigation Arrows */}
            {items.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 bg-background/80 hover:bg-background/90 backdrop-blur-sm"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 bg-background/80 hover:bg-background/90 backdrop-blur-sm"
                  onClick={goToNext}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}
          </div>
          {/* Thumbnails */}
          {items.length > 1 && (
            <div className="flex-shrink-0 p-4 border-t border-border/50 bg-background/95">
              <div className="flex gap-2 justify-center overflow-x-auto">
                {items.map((item, index) => (
                  <button
                    key={item.id}
                    className={cn(
                      "flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200",
                      index === currentIndex
                        ? "border-primary ring-2 ring-primary/20"
                        : "border-border/50 hover:border-border opacity-70 hover:opacity-100"
                    )}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
