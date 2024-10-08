'use client';

import { ArrowBigRight, Book, UserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import ImprumutaModal from './ImprumutaModal';
import { useState } from 'react';

interface ImprumutaProps {
    bookId: string;
    bookName: string;
    bookAuthor: string;
    bookCategory: string;
    available: number;
    setAvailable: any;
    borrowed: number;
    setBorrowed: any;
}

const Imprumuta = ({
    bookId,
    bookName,
    bookAuthor,
    bookCategory,
    available,
    setAvailable,
    borrowed,
    setBorrowed
}: ImprumutaProps) => {
    return (
        <Dialog>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <DialogTrigger asChild>
                            <Button
                                variant="outline"
                                className="h-[40px] w-[80px] p-1 mx-2"
                                disabled={available === 0}
                            >
                                <div className="relative h-7 w-7">
                                    <Book className="static h-6 w-6 mt-1 mr-1" />
                                    <Badge className=" dark:bg-white bg-black absolute top-0 right-0 flex h-4 w-4 p-1 shrink-0 items-center justify-center rounded-full">
                                        {available}
                                    </Badge>
                                </div>
                                <ArrowBigRight className="h-5 w-5" />
                                <UserRound className="h-6 w-6" />
                            </Button>
                        </DialogTrigger>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Imprumuta</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <ImprumutaModal
                bookId={bookId}
                bookName={bookName}
                bookAuthor={bookAuthor}
                bookCategory={bookCategory}
                available={available}
                setAvailable={setAvailable}
                borrowed={borrowed}
                setBorrowed={setBorrowed}
            />
        </Dialog>
    );
};

export default Imprumuta;
