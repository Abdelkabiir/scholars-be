import { Controller, Post, Res, Body, HttpStatus, Get, Param, NotFoundException, Delete, Put, Query } from '@nestjs/common';
import { CenturyService } from './century.service';
import { CreateCenturyDTO } from 'src/dto/century.dto';

@Controller('century')
export class CenturyController {
    constructor(private centuryService: CenturyService) { }
    // add a century
    @Post('/create')
    async addCentury(@Res() res, @Body() createCenturyDTO: CreateCenturyDTO) {
        const century = await this.centuryService.addCentury(createCenturyDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Century has been created successfully',
            century,
        });
    }
    // Retrieve centuries list
    @Get('centuries')
    async getAllCenturies(@Res() res) {
        const centuries = await this.centuryService.getAllCenturies();
        return res.status(HttpStatus.OK).json(centuries);
    }
    // Fetch a particular century using ID
    @Get('century/:centuryID')
    async getCentury(@Res() res, @Param('centuryID') centuryID) {
        const century = await this.centuryService.getCentury(centuryID);
        if (!century) {
            throw new NotFoundException('Century does not exist!');
        }
        return res.status(HttpStatus.OK).json(century);
    }
    // Update a century's details
    @Put('/update')
    async updateCentury(@Res() res, @Query('centuryID') centuryID, @Body() createCustomerDTO: CreateCenturyDTO) {
        const century = await this.centuryService.updateCentury(centuryID, createCustomerDTO);
        if (!century) {
            throw new NotFoundException('Century does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Century has been successfully updated',
            century,
        });
    }
    // Delete a century
    @Delete('/delete')
    async deleteCentury(@Res() res, @Query('centuryID') centuryID) {
        const century = await this.centuryService.deleteCentury(centuryID);
        if (!century) {
            throw new NotFoundException('Century does not exist');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Century has been deleted',
            century,
        });
    }
}
