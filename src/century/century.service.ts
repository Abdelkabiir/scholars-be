import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Century } from 'src/interfaces/century.interface';
import { CreateCenturyDTO } from 'src/dto/century.dto';
import { Model } from 'mongoose';

@Injectable()
export class CenturyService {
    constructor(@InjectModel('Century') private readonly centuryModel: Model<Century>) { }
    async getAllCenturies(): Promise<Century[]> {
        const centuries = await this.centuryModel.find().exec();
        return centuries;
    }
     // Get a single century
     async getCentury(centuryID): Promise<Century> {
        const century = await this.centuryModel.findById(centuryID).exec();
        return century;
    }
    async addCentury(createCenturyDTO: CreateCenturyDTO): Promise<Century> {
        const newCentury = await new this.centuryModel(createCenturyDTO);
        return newCentury.save();
    }

    // Edit century details
    async updateCentury(centuryID, createCenturyDTO: CreateCenturyDTO): Promise<Century> {
        const updatedCentury = await this.centuryModel
            .findByIdAndUpdate(centuryID, createCenturyDTO, { new: true });
        return updatedCentury;
    }
    // Delete a century
    async deleteCentury(centuryID): Promise<any> {
        const deletedCentury = await this.centuryModel.findByIdAndRemove(centuryID);
        return deletedCentury;
    }
}
